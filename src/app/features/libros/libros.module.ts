import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosListComponent } from './components/libros-list/libros-list.component';
import { LibrosFormComponent } from './components/libros-form/libros-form.component';


@NgModule({
  declarations: [
    LibrosListComponent,
    LibrosFormComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    ReactiveFormsModule
  ]
})
export class LibrosModule { }
