import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GenerateService } from '../../services/generate.service';

@Component({
  selector: 'app-notify',
  standalone: false,
  templateUrl: './notify.component.html',
  styleUrl: './notify.component.scss'
})
export class NotifyComponent {
  message: any;
  constructor(public dialogRef: MatDialogRef<NotifyComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private generateService: GenerateService) {

  }

  ngOnInit() {
    this.message = this.data.message;
  }

  onClose() {
    this.dialogRef.close();
  }
}
