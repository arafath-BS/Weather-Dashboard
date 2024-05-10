import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitySelectorComponent } from './city-selector/city-selector.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CitySelectorComponent,
    WeatherDisplayComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
