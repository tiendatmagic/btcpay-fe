import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GenerateService } from '../../services/generate.service';

@Component({
  selector: 'app-create-link',
  standalone: false,
  templateUrl: './create-link.component.html',
  styleUrl: './create-link.component.scss'
})
export class CreateLinkComponent {
  url = window.origin;
  constructor(public dialogRef: MatDialogRef<CreateLinkComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private generateService: GenerateService) {

  }

  ngOnInit() {
    console.log(this.data);
    this.url = window.origin + '/order/' + this.data.link
  }
  onClose() {
    this.dialogRef.close();
  }

  copyUrl(url: string) {
    navigator.clipboard.writeText(url).then(() => {
      console.log('Copied to clipboard');
    });
  }
}
