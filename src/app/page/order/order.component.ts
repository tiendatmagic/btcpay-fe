import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenerateService } from '../../services/generate.service';
import { MatDialog } from '@angular/material/dialog';
import { NotifyComponent } from '../../modal/notify/notify.component';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  id: any;
  product: any = [];
  address: any = '0x16280fD4150ef830fFF4B0B5fCFAA25dd8999999';
  timeLeft: any;
  timeLeftInterval: any;
  checkTransactionTimeOut: any;
  constructor(private route: ActivatedRoute, private generateService: GenerateService, private dialog: MatDialog) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id);

    if (this.id) {
      this.generateService.getOrder({
        link: this.id
      }).subscribe((res: any) => {
        console.log(res);
        this.product = res;
        console.log(res.status);
        this.timeLeft = new Date(res.expire_date).getTime() - new Date().getTime();
        console.log(this.timeLeft);
        if (res.status == 'pending') {
          this.checkTransaction();
        }
        this.timeLeftInterval = setInterval(() => {
          this.timeLeft = new Date(res.expire_date).getTime() - new Date().getTime();
          console.log(this.timeLeft);
          if (this.timeLeft < 0 || !this.timeLeft) {
            clearInterval(this.timeLeftInterval);
          }
        }, 1000)
      })
    }
  }

  ngOnDestroy() {
    clearInterval(this.timeLeftInterval);
    clearTimeout(this.checkTransactionTimeOut);
  }

  checkTransaction() {
    this.checkTransactionTimeOut = setTimeout(() => {
      this.generateService.checkTransaction({
        link: this.id
      }).subscribe((res: any) => {
        console.log(res);
        if (res.status == 'success') {
          this.product.status = 'completed';
          clearInterval(this.checkTransactionTimeOut);
          this.timeLeft = 0;
          this.dialog.open(NotifyComponent, {
            width: '90%',
            enterAnimationDuration: '100ms',
            exitAnimationDuration: '100ms',
            maxWidth: '500px',
            data: {
              message: 'Thanh toán thành công'
            }
          })
        }
        else {
          this.checkTransaction();
        }
      })

    }, 7000);
  }

  copyTotal(total: any) {
    navigator.clipboard.writeText(total).then(() => {
      console.log('Copied to clipboard');
    });
  }

}
