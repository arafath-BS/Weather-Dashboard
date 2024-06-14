import { Component, OnInit } from '@angular/core';
import { CityInfo } from '../city.model';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.css',
})
export class CitySelectorComponent implements OnInit {
  flag:boolean= true;
  searchQuery: string = '';
  filteredCities = [];
  cities:CityInfo[] = [];
  name :string= '';
  isOpen = false;

  constructor(private weatherService: WeatherService) {}
  ngOnInit() {
    this.weatherService.fetchData().subscribe({
      next: (res) => {
        this.cities = res;
        console.log(res);
      },
    });
  }

  get() {
    this.isOpen = !this.isOpen;
  }

 
  selectedWeather(city: CityInfo) {
    this.name = city.name;

    this.weatherService.Cites.emit(city);
  }

  filterCities() {
    this.flag = false;
    this.filteredCities = this.cities.filter((city) =>
      city.name.toLowerCase().startsWith(this.searchQuery.toLowerCase())
    );
  }
}
