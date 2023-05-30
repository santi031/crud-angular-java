import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUpdatePageComponent } from './create-update-page/create-update-page.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CreateUpdatePageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    CreateUpdatePageComponent,
    HomeComponent
  ]
})
export class PagesModule { }
