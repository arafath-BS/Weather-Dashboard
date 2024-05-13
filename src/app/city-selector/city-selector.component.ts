import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CityInfo } from '../city.model';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.css'
})
export class CitySelectorComponent implements OnInit{

  flag=true;
  searchQuery:string ='';

  filteredCities = [];
  
  cityss=[];

  isOpen=false;
  constructor(private weatherService:WeatherService)
  {
    
    
  }


  ngOnInit()
  {
    

   this.weatherService.fetchData().subscribe({
    next:(res)=>{
      this.cityss=res;
      console.log(res);
    }
   })
  }


  

  get()
  {
    // this.cityss=this.weatherService.citys;
    this.isOpen=!this.isOpen;
    // console.log(this.cityss);
  }



   name='';
  selectedWeather(ct:CityInfo)
  {
   this.name=ct.name;

    this.weatherService.Citys.emit(ct);
  }

  


  // for searching 

  filterCities() {

    this.flag=false;
    this.filteredCities = this.cityss.filter(city => city.name.toLowerCase().startsWith(this.searchQuery.toLowerCase()));
  
  
  }
  

  

}
