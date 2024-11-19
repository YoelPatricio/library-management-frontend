import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/core/services/autor/autor.service';
import { Autor } from 'src/app/core/models/autor.model';

@Component({
  selector: 'app-autores-list',
  templateUrl: './autores-list.component.html',
  styleUrls: ['./autores-list.component.scss'],
})
export class AutoresListComponent implements OnInit {
  autores: Autor[] = [];
  currentPage: number = 0;
  totalPages: number = 0;
  pageSize: number = 10;

  constructor(private autorService: AutorService) {}

  ngOnInit(): void {
    this.cargarAutoresPaginado(this.currentPage);
  }

  cargarAutores(): void {
    this.autorService.getAutores().subscribe((autores) => {
      this.autores = autores;
    });
  }

  cargarAutoresPaginado(page: number): void {
    this.autorService.getAutoresPaginado(page, this.pageSize).subscribe((data) => {
      this.autores = data.content;
      this.totalPages = data.totalPages;
    });
  }

  cambiarPagina(nuevaPagina: number): void {
    if (nuevaPagina >= 0 && nuevaPagina < this.totalPages) {
      this.currentPage = nuevaPagina;
      this.cargarAutoresPaginado(this.currentPage);
    }
  }

  eliminarAutor(id: number): void {
    if (confirm('¿Estás seguro de eliminar este autor?')) {
      this.autorService.deleteAutor(id).subscribe(() => {
        this.cargarAutores();
      });
    }
  }
}
