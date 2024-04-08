import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarsRoutingModule } from './cars-routing.module';
import { HttpClientModule } from '@angular/common/http'
 


@NgModule({
  declarations: [
    CarFormComponent,
    CarListComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CarsModule { }
