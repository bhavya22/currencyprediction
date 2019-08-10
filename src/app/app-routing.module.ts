import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { ChartComponent } from './chart/chart.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
const routes: Routes = [
 { path: '', component: CountryComponent },
 { path: 'chart', component: ChartComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports : [ RouterModule ],

  declarations: []
})

export class AppRoutingModule { }
