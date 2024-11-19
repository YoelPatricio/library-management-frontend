import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'autores', loadChildren: () => import('./features/autores/autores.module').then(m => m.AutoresModule) },
      { path: 'libros', loadChildren: () => import('./features/libros/libros.module').then(m => m.LibrosModule) },
      { path: 'prestamos', loadChildren: () => import('./features/prestamos/prestamos.module').then(m => m.PrestamosModule) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirigir a la página principal
    ],
  },
  { path: '**', redirectTo: '' }, // Redirigir rutas desconocidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
