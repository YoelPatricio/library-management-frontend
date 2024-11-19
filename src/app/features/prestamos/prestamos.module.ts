import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrestamosRoutingModule } from './prestamos-routing.module';
import { PrestamosListComponent } from './components/prestamos-list/prestamos-list.component';
import { PrestamosFormComponent } from './components/prestamos-form/prestamos-form.component';


@NgModule({
  declarations: [
    PrestamosListComponent,
    PrestamosFormComponent
  ],
  imports: [
    CommonModule,
    PrestamosRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PrestamosModule { }
