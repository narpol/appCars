import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../interface/car.interface';




@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit{

  cars: Car[] = [];

  constructor(private carsService: CarsService){}
  ngOnInit(): void {
    this.getCarsList();
  }


  getCarsList(): void{
    this.carsService.getAllCars().subscribe(
      cars => this.cars = cars
    );
  }

}
