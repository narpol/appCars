import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../interface/car.interface';
import { Observable } from 'rxjs';


const url: string = 'https://freetestapi.com/api/v1/cars'


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor( private httpClient: HttpClient  ) { }


  getAllCars(): Observable<Car[]>{
    return this.httpClient.get<Car[]>(`${url}`);    
  }


  saveCar(){
    // this.httpClient.
  }



}
