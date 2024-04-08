import { Car } from './../../interface/car.interface';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarsService } from '../../services/cars.service';

let carsList: Car[] = [];


@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent  {

  public carForm =  new FormGroup<Car | any>({
    id:    [0],
    make:    [''],
    model:    [''],
    year:    [0],
    color:    [''],
    mileage:    [0],
    price:    [0],
    fuelType:    [''],
    transmission:    [''],
    engine:    [''],
    horsepower:    [0],
    features:    [['']],
    owners:    [0],
    image:    ['']
  });

  constructor( private formBuilder: FormBuilder, private carService: CarsService ){}


  saveCar(car:Car):void{
    this.carService.saveCar();
  }


  

  

}
