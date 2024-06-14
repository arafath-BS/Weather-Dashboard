import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { CityInfo } from './city.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [WeatherService],
})
export class AppComponent {
  cities!: CityInfo;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.fetchData().subscribe((data) => {
      this.cities = data;

      this.weatherService.setCity(data);
    });
  }
}
