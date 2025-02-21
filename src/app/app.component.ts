import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'btcpay';

  ngOnInit() {

  }

  ngAfterViewInit() {
    initFlowbite();
  }
}
