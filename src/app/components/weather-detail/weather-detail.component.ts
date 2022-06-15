import {AfterViewInit, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {take} from "rxjs";
import {ApiLocation} from "../../models/api.model";
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherDetailComponent implements OnInit, AfterViewInit {

  @Input() public cityWeather?: ApiLocation;

  public globalIdLocal?: number;
  //private globalId?: string;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.pipe(take(1)).subscribe((queryMap) => {
      const globalId: string | undefined = queryMap.get("id")?.toString();
      if(!globalId){
        return;
      }
      this.globalIdLocal = Number(globalId);
    })
  }

  ngAfterViewInit(): void {
  }

}
