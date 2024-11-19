import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresListComponent } from './components/autores-list/autores-list.component';
import { AutoresFormComponent } from './components/autores-form/autores-form.component';


@NgModule({
  declarations: [
    AutoresListComponent,
    AutoresFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutoresRoutingModule
  ]
})
export class AutoresModule { }
