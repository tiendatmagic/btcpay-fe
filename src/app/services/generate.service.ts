import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GenerateService {
  public urlEnv = environment.production ? environment.apiUrl : environment.apiUrlLocal;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {

  }

  createProduct(data: any) {
    return this.http.post(`${this.urlEnv}api/create-product`, data).pipe(
    );
  }

  getProduct() {
    return this.http.get(`${this.urlEnv}api/get-product`).pipe(
    );
  }


  createOrder(data: any) {
    return this.http.post(`${this.urlEnv}api/create-order`, data).pipe(
    );
  }

  getOrder(data: any) {
    return this.http.post(`${this.urlEnv}api/get-order`, data).pipe(
    );
  }

  getListOrder() {
    return this.http.get(`${this.urlEnv}api/get-list-order`).pipe(
    );
  }

  checkTransaction(data: any) {
    return this.http.post(`${this.urlEnv}api/check-transaction`, data).pipe(
    );
  }

}