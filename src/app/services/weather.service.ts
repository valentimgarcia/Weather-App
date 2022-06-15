import { Injectable } from '@angular/core';
import {catchError} from "rxjs";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {ApiLocation, ApiLocationWeatherData} from "../models/api.model";

const apiUrl = 'https://api.ipma.pt/public-data/forecast/';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCitiesData(): Observable<ApiLocation[]> {
    return this.http.get<ApiLocation[]>(`${apiUrl}locations.json`).pipe(
      catchError(this.handleError)
    );
  }

  getCityData(id: string): Observable<ApiLocationWeatherData[]> {
    return this.http.get<ApiLocationWeatherData[]>(`${apiUrl}aggregate/${id}.json`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(`An error occurred:`, error.error.message);
    } else {
      console.error(`Error code ${error.status},` + ` body was: ${error.error}`);
    }
    return throwError("Couldnt load, please try again");
  }

}
