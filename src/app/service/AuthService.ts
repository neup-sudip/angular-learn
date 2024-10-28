import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QrAuth } from '../models/rqAuth';
import { QrAuthResponse } from '../models/qrAuthRes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:8081/public/auth/qr';

  constructor(private http: HttpClient) {}

  generateQrCode() {
    return this.http.post<QrAuthResponse>(`${this.authUrl}/generate`, {});
  }

  scanQrCode(token: string) {
    return this.http.post(`${this.authUrl}/verify`, { token });
  }
}
