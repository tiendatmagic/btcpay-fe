import { Component } from '@angular/core';
import { GenerateService } from '../../services/generate.service';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  order: any = [];
  isLoading: boolean = false;
  constructor(private generateService: GenerateService, private dialog: MatDialog, private route: Router) {

  }


  ngOnInit() {
    this.isLoading = true;
    this.generateService.getListOrder().subscribe(
      (res: any) => {
        this.order = res.data;
        this.isLoading = false;
      }
    )
  }
  onPayment(link: string) {
    window.origin + '/order/' + link;
    this.route.navigate(['order', link]);
  }

}
