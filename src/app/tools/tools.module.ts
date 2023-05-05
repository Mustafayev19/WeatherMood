import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestfullService } from './restfull.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],

  providers: [RestfullService]
})
export class ToolsModule { }
