import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './client/home/home.component';
import { ClientComponent } from './client/client.component';
import { ClientModule } from './client/client.module';

const routes: Routes = [
  {
    path: 'client',
    loadChildren: () => ClientModule,
  },
  {
    path: 'client/home',
    component: HomeComponent,
  },
  {
    path: '',
    loadChildren: () => ClientModule,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
