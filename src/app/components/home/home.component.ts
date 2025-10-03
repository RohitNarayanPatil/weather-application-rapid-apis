import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],   // ✅ keep only UI-related modules
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cityName: string = '';
  weatherData: any;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getWeather() {
    if (!this.cityName.trim()) {
      this.toastr.warning('Please enter a city name!', 'Validation');
      return;
    }

    const url = `https://open-weather13.p.rapidapi.com/city?city=${encodeURIComponent(this.cityName)}&lang=EN`;

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '352a170f95msh20eab09f71b0acep16b6cajsnf22f5f1f9b7e',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    });

    this.http.get(url, { headers }).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.toastr.success('Weather data fetched successfully!', 'Success');
      },
      error: (err) => {
        console.error('Error:', err);
        this.toastr.error('Failed to fetch weather data', 'Error');
      }
    });
  }
}
