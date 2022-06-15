import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WeatherCardComponent} from "./components/weather-card/weather-card.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {WeatherDetailComponent} from "./components/weather-detail/weather-detail.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    WeatherDetailComponent,
    HomePageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    VirtualScrollerModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
