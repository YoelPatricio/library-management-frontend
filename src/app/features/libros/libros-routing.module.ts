import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosListComponent } from './components/libros-list/libros-list.component';
import { LibrosFormComponent } from './components/libros-form/libros-form.component';

const routes: Routes = [
  { path: '', component: LibrosListComponent }, // Listado de libros
  { path: 'new', component: LibrosFormComponent }, // Formulario para agregar nuevo libro
  { path: 'edit/:id', component: LibrosFormComponent }, // Formulario para editar libro
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibrosRoutingModule {}
