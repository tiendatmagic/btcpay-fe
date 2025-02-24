import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { CreateProductComponent } from './page/create-product/create-product.component';
import { ProductComponent } from './page/product/product.component';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateOrderComponent } from './modal/create-order/create-order.component';
import { CreateLinkComponent } from './modal/create-link/create-link.component';
import { OrderComponent } from './page/order/order.component';
import { QRCodeComponent } from 'angularx-qrcode';
import { NotifyComponent } from './modal/notify/notify.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OrdersComponent } from './page/orders/orders.component';

export function HttpLoaderFactory(http: HttpClient) {

}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    CreateProductComponent,
    ProductComponent,
    CreateOrderComponent,
    CreateLinkComponent,
    OrderComponent,
    NotifyComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    QRCodeComponent
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
