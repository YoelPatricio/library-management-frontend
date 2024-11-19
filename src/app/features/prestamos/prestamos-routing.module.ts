import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestamosListComponent } from './components/prestamos-list/prestamos-list.component';
import { PrestamosFormComponent } from './components/prestamos-form/prestamos-form.component';

const routes: Routes = [
  { path: '', component: PrestamosListComponent }, // Listado de prestamos
  { path: 'new', component: PrestamosFormComponent }, // Formulario para agregar nuevo prestamo
  { path: 'edit/:id', component: PrestamosFormComponent }, // Formulario para editar prestamo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestamosRoutingModule {}
