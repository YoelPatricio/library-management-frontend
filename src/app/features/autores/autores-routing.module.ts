import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresListComponent } from './components/autores-list/autores-list.component';
import { AutoresFormComponent } from './components/autores-form/autores-form.component';

const routes: Routes = [
  { path: '', component: AutoresListComponent }, // Listado de autores
  { path: 'new', component: AutoresFormComponent }, // Formulario para agregar nuevo autor
  { path: 'edit/:id', component: AutoresFormComponent }, // Formulario para editar autor
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoresRoutingModule {}
