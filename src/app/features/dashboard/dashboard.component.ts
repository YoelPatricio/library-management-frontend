import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/core/services/libro/libro.service';
import { AutorService } from 'src/app/core/services/autor/autor.service';
import { PrestamoService } from 'src/app/core/services/prestamo/prestamo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  totalLibros = 0;
  totalAutores = 0;
  totalPrestamos = 0;

  constructor(
    private libroService: LibroService,
    private autorService: AutorService,
    private prestamoService: PrestamoService
  ) {}

  ngOnInit(): void {
    this.libroService.getLibros().subscribe((libros) => (this.totalLibros = libros.length));
    this.autorService.getAutores().subscribe((autores) => (this.totalAutores = autores.length));
    this.prestamoService.getPrestamos().subscribe((prestamos) => (this.totalPrestamos = prestamos.length));
  }
}
