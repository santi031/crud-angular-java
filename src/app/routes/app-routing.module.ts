import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { CreateUpdatePageComponent } from '../pages/create-update-page/create-update-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'create-user', component: CreateUpdatePageComponent },
  { path: 'update-user/:id', component: CreateUpdatePageComponent },
  { path: '**', redirectTo: '/home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
