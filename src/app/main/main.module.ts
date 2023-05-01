import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadLineComponent } from './head-line/head-line.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    HeadLineComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
