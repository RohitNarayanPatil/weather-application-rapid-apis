
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, HttpClientModule

  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   cityName: string = '';        // input binding
  weatherData: any;

  constructor(private http: HttpClient) { }

  getWeather() {
    if (!this.cityName.trim()) {
      alert('Please enter a city name');
      return;
    }

    const url = `https://open-weather13.p.rapidapi.com/city?city=${encodeURIComponent(this.cityName)}&lang=EN`;

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '352a170f95msh20eab09f71b0acep16b6cajsnf22f5f1f9b7e', // Replace with your key
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    });

    this.http.get(url, { headers }).subscribe({
      next: (data) => this.weatherData = data,
      error: (err) => console.error('Error:', err)
    });
  }}
