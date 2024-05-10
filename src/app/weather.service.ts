import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityInfo } from './city.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

   Citys=new EventEmitter<CityInfo>();

  citys=[];

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get<CityInfo>('../assets/Data.json');
  }

 

   setCity(cities:CityInfo){

    // const cityArray = Object.keys(cities).map(key => ({
    //   id: key,
    //   ...cities[key]
    // }));

    // this.citys= cityArray;

  

    //console.log(this.city);
  }



  

  getData()
  {
    return this.citys;
  }

  // sendData(ct:CityInfo){
  //   this.Citys.emit(ct)
  // }
}
