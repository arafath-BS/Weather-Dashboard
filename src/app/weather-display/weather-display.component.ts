import { Component, OnInit } from '@angular/core';
import { CityInfo } from '../city.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.css'
})
export class WeatherDisplayComponent implements OnInit{

  iconArray={

   sunny:"https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png",
   cloudy:"https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png",
   rainny:"https://cdn-icons-png.flaticon.com/512/4150/4150904.png",
   Thunderstorm:"https://cdn-icons-png.flaticon.com/512/6635/6635551.png",
   foggy:"https://cdn-icons-png.flaticon.com/512/2076/2076827.png",
  
  
  };

  rcvCity:CityInfo;
  date = new Date();
 
constructor(private weatherService:WeatherService){}

  ngOnInit(): void {
    
     this.weatherService.Citys.subscribe(data =>{
             this.rcvCity=data;
     });
  }


}
