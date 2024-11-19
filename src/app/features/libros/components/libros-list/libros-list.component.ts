import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/core/services/libro/libro.service';
import { Libro } from 'src/app/core/models/libro.model';
import { LibroResponse } from 'src/app/core/models/libro-response.model';

@Component({
  selector: 'app-libros-list',
  templateUrl: './libros-list.component.html',
  styleUrls: ['./libros-list.component.scss'],
})
export class LibrosListComponent implements OnInit {
  libros: LibroResponse[] = [];
  currentPage: number = 0;
  totalPages: number = 0;
  pageSize: number = 10;

  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    this.cargarLibros(this.currentPage);
  }

  cargarLibros(page: number): void {
    this.libroService.getLibrosPaginado(page, this.pageSize).subscribe((data) => {
      this.libros = data.content;
      this.totalPages = data.totalPages;
    });
  }

  cambiarPagina(nuevaPagina: number): void {
    if (nuevaPagina >= 0 && nuevaPagina < this.totalPages) {
      this.currentPage = nuevaPagina;
      this.cargarLibros(this.currentPage);
    }
  }

  eliminarLibro(id: number): void {
    if (confirm('¿Estás seguro de eliminar este libro?')) {
      this.libroService.deleteLibro(id).subscribe(() => {
        this.cargarLibros(this.currentPage);
      });
    }
  }
}
