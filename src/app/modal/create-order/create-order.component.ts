import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog, MatDialogRef, MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { GenerateService } from '../../services/generate.service';
import { CreateLinkComponent } from '../create-link/create-link.component';
@Component({
  selector: 'app-create-order',
  standalone: false,
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.scss'
})
export class CreateOrderComponent {
  createOrderForm: FormGroup;
  quantity: FormControl;
  id: any;
  isDisabled = false;
  constructor(_fb: FormBuilder, public dialogRef: MatDialogRef<CreateOrderComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private generateService: GenerateService) {
    this.quantity = new FormControl(1, [
      Validators.required
    ]);

    this.createOrderForm = _fb.group({
      id: this.data.id,
      quantity: this.quantity,
    });
  }

  ngOnInit() {
    this.id = this.data.id;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  createLink() {
    this.isDisabled = true;
    this.generateService.createOrder(this.createOrderForm.value).subscribe(
      (res: any) => {
        if (res && res.status == 'success') {
          this.dialogRef.close();
          this.dialog.open(CreateLinkComponent, {
            width: '90%',
            enterAnimationDuration: '100ms',
            exitAnimationDuration: '100ms',
            maxWidth: '500px',
            data: {
              link: res.link
            }
          })
          this.isDisabled = false;
        }
      }
    );
  }
}
