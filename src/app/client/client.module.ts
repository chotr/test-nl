import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { SheduleComponent } from './shedule/shedule.component';
import { DpDatePickerModule } from 'ng2-date-picker';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

const routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'schedule',
        component: SheduleComponent,
      },
      {
        path: 'schedule/:id',
        component: SheduleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    DpDatePickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
})
export class ClientModule {}
