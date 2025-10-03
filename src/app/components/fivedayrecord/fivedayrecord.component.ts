import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-fivedayrecord',
  imports: [CommonModule,
    FormsModule, HttpClientModule],
  templateUrl: './fivedayrecord.component.html',
  styleUrl: './fivedayrecord.component.scss'
})
export class FivedayrecordComponent {
  latitude!: number;
  longitude!: number;
  forecastData: any;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getForecast() {
    if (!this.latitude || !this.longitude) {
      // alert('Please enter both latitude and longitude!');
      this.toastr.warning('Please enter both latitude and longitude!', 'Validation');
      return;
    }

    const url = `https://open-weather13.p.rapidapi.com/fivedaysforcast?latitude=${this.latitude}&longitude=${this.longitude}&lang=EN`;

    const headers = new HttpHeaders({
      'X-Rapidapi-Key': '352a170f95msh20eab09f71b0acep16b6cajsnf22f5f1f9b7e',
      'X-Rapidapi-Host': 'open-weather13.p.rapidapi.com'
    });

    this.http.get(url, { headers }).subscribe({
      next: (data) => { this.forecastData = data, this.toastr.success('Weather data fetched successfully!', 'Success'); },
      error: (err) => {
        console.error('Error fetching forecast:', err), this.toastr.error('Failed to fetch weather data', 'Error');
      }
    });
  }
}
