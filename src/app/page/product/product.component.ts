import { Component } from '@angular/core';
import { GenerateService } from '../../services/generate.service';
import { initFlowbite } from 'flowbite';
import {
  MatDialog,
} from '@angular/material/dialog';
import { CreateProductComponent } from '../create-product/create-product.component';
import { CreateOrderComponent } from '../../modal/create-order/create-order.component';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  product: any = [];
  constructor(private generateService: GenerateService, private dialog: MatDialog) {

  }


  ngOnInit() {
    this.generateService.getProduct().subscribe(
      (res: any) => {
        this.product = res;
        console.log(this.product);
      }
    )
  }
  createOrder(id: string) {
    this.dialog.open(CreateOrderComponent, {
      width: '90%',
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '100ms',
      maxWidth: '500px',
      data: { id: id }
    });
  }

}
