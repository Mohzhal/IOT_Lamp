import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  apiUrl: string = environment.apiRepl;

  constructor(private http: HttpClient) {}

  sendCommand(command: string) {
    const body = { command };

    this.http.post<{ status: string, data: any }>(this.apiUrl, body).subscribe(
      response => {
        console.log('API Response:', response);
      },
      error => {
        console.error('Failed to send command:', error);
      }
    );
  }
}