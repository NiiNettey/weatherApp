import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

  constructor(private http: HttpClient) {}

  getWeather(location: string): Observable<any> {
    const url = `${this.apiUrl}?q=${location}&units=imperial&appid=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
