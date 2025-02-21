import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GenerateService } from '../../services/generate.service';

@Component({
  selector: 'app-create-product',
  standalone: false,
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {
  createProductForm: FormGroup;
  productName: FormControl;
  price: FormControl;
  quantity: FormControl;
  content: FormControl;
  constructor(_fb: FormBuilder, private generateService: GenerateService) {
    this.productName = new FormControl('', [
      Validators.required
    ]);
    this.price = new FormControl('', [
      Validators.required
    ]);
    this.quantity = new FormControl('', [
      Validators.required
    ]);
    this.content = new FormControl('', [
    ]);

    this.createProductForm = _fb.group({
      productName: this.productName,
      price: this.price,
      quantity: this.quantity,
      content: this.content
    });
  }
  onCreateProduct() {
    if (this.createProductForm.valid) {
      this.generateService.createProduct(this.createProductForm.value).subscribe(
        (res: any) => {
          console.log(res);
        }
      );
    }
  }
}
