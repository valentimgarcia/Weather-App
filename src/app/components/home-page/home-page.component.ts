import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ApiLocation} from "../../models/api.model";
import {WeatherService} from "../../services/weather.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  @Input()

  public weatherCities: ApiLocation[] = [];
  public filteredCities: ApiLocation[] = [];
  public loading?: boolean;

  constructor(private weatherService: WeatherService, private router: Router) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.weatherService.getCitiesData().subscribe((locations) => {
      this.weatherCities = locations;
      this.searchCity("");
    })
  }

  searchCity(searchTerm: string) {
    if (searchTerm == "") {
      this.filteredCities = this.weatherCities;
      return;
    }
    this.filteredCities = this.weatherCities.filter((weatherCity: ApiLocation) => {
      return weatherCity.local.toLowerCase().trim().includes(searchTerm.toLowerCase().trim());
    })
    console.log("cenas")
  }

  cardDetails(globalLocalId: number) {
    this.router?.navigate(["detail", globalLocalId]);
  }
}
