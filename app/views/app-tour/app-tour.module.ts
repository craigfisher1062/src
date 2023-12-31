import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule as MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppTourComponent } from './app-tour.component';
import { TourRoutes } from './app-tour.routing';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(TourRoutes)
  ],
  declarations: [AppTourComponent]
})
export class AppTourModule { }
