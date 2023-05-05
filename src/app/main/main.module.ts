import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadLineComponent } from './head-line/head-line.component';
import { MainComponent } from './main/main.component';
import { ToolsModule } from '../tools/tools.module';






@NgModule({
  declarations: [
    HeadLineComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ToolsModule



  ],
  exports: [HeadLineComponent, MainComponent]
})
export class MainModule { }
