import {AfterViewInit, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ApiLocation, ApiLocationWeatherData} from "../../models/api.model";
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherCardComponent implements OnInit, AfterViewInit {

  @Input() public globalIdLocal?: number;
  @Input() public cityName?: string;

  public weatherData: ApiLocationWeatherData[] = [];

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (!this.globalIdLocal) {
      return;
    }
    this.weatherService.getCityData(this.globalIdLocal.toString()).subscribe((weatherData) => {
      this.weatherData = weatherData;
    })
  }

}
