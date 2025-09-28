import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-latlong',
  imports: [ CommonModule,
    FormsModule, RouterModule ,HttpClientModule],
  templateUrl: './latlong.component.html',
  styleUrl: './latlong.component.scss'
})
export class LatlongComponent {
  latitude!: number;
  longitude!: number;
  weatherData: any;

  constructor(private http: HttpClient) {}

  getWeather() {
    if (!this.latitude || !this.longitude) {
      alert('Please enter both latitude and longitude!');
      return;
    }

    const url = `https://open-weather13.p.rapidapi.com/latlon?latitude=${this.latitude}&longitude=${this.longitude}&lang=EN`;

    const headers = new HttpHeaders({
      'X-Rapidapi-Key': '352a170f95msh20eab09f71b0acep16b6cajsnf22f5f1f9b7e',
      'X-Rapidapi-Host': 'open-weather13.p.rapidapi.com'
    });

    this.http.get(url, { headers }).subscribe({
      next: (data) => this.weatherData = data,
      error: (err) => console.error('Error fetching weather:', err)
    });
  }
}
