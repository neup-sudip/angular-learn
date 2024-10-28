import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/AuthService';
import { WebSocketService } from '../service/WebSocketService';
import { QrAuthResponse } from '../models/qrAuthRes';

@Component({
  selector: 'app-qr-login',
  templateUrl: './qr-login.component.html',
  styleUrl: './qr-login.component.css'
})
export class QrLoginComponent implements OnInit {
  qrCodeImage: string | null = null;
  token: string | null = null;

  constructor(
    private authService: AuthService,
    private webSocketService: WebSocketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.generateQrCode().subscribe((response: QrAuthResponse) => {
      this.qrCodeImage = `data:image/png;base64,${response.data.token}`;
      this.token = response.data.id;
    });

    this.webSocketService.getMessage().subscribe((message: string) => {
      if (message === this.token) {
        this.router.navigate(['/dashboard']);  
      }
    });
  }
}
