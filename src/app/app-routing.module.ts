import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {WeatherDetailComponent} from "./components/weather-detail/weather-detail.component";

const routes: Routes = [{
  path: "",
  component: HomePageComponent,
},
  {
    path: "detail/:id",
    component: WeatherDetailComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
