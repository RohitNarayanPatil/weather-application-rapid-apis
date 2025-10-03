import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-latlong',
  imports: [CommonModule,
    FormsModule, RouterModule, HttpClientModule],
  templateUrl: './latlong.component.html',
  styleUrl: './latlong.component.scss'
})
export class LatlongComponent {

  latitude!: number;
  longitude!: number;
  weatherData: any;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  //  Fetch weather API
  getWeather() {
    if (!this.latitude || !this.longitude) {
      // alert('Please enter both latitude and longitude!');
      this.toastr.warning('Please enter both latitude and longitude!', 'Validation');
      return;
    }

    const url = `https://open-weather13.p.rapidapi.com/latlon?latitude=${this.latitude}&longitude=${this.longitude}&lang=EN`;

    const headers = new HttpHeaders({
      'X-Rapidapi-Key': '352a170f95msh20eab09f71b0acep16b6cajsnf22f5f1f9b7e',
      'X-Rapidapi-Host': 'open-weather13.p.rapidapi.com'
    });

    this.http.get(url, { headers }).subscribe({
      next: (data) => {
        this.weatherData = data,
          this.toastr.success('Weather data fetched successfully!', 'Success');
      },
      error: (err) => {
        console.error('Error fetching weather:', err),
          this.toastr.error('Failed to fetch weather data', 'Error');
      }
    });
  }

  //  Get current location
  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.latitude = pos.coords.latitude;
          this.longitude = pos.coords.longitude;
          this.getWeather(); // Auto fetch weather for current location
        },
        (err) => {
          console.error('Geolocation error:', err);
             this.toastr.warning('Unable to fetch location. Please allow location access.', 'Validation');
        }
      );
    } else {
        this.toastr.error('Geolocation is not supported by this browser.', 'Error');
    }
  }

  //  Copy Lat & Long
  copyLatLong() {
    const latlong = `${this.latitude}, ${this.longitude}`;
    navigator.clipboard.writeText(latlong).then(() => {
      // alert(`Copied: ${latlong}`);
        this.toastr.error(`Copied: ${latlong}`, 'Error');
    });
  }
}
