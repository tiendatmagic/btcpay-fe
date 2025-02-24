import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CreateProductComponent } from './page/create-product/create-product.component';
import { ProductComponent } from './page/product/product.component';
import { OrderComponent } from './page/order/order.component';
import { OrdersComponent } from './page/orders/orders.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Trang chủ' }
  },
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Trang chủ' }
  },
  {
    path: 'product',
    component: ProductComponent,
    data: { title: 'Sản phẩm' }
  },
  {
    path: 'orders',
    component: OrdersComponent,
    data: { title: 'Đơn hàng' }
  },
  {
    path: 'create-product',
    component: CreateProductComponent,
    data: { title: 'Tạo sản phẩm' }
  },
  {
    path: 'order/:id',
    component: OrderComponent,
    data: { title: 'Đơn hàng' }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
