import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsModule } from './cars/cars.module';

const routes: Routes = [
  {
    path: 'car-list',
    loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule)
  },
  {
    path: 'car-form',
    loadChildren:() => import('./cars/cars.module').then(m => m.CarsModule)
  },
  {
    path: '**',
    redirectTo: 'car-list'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
