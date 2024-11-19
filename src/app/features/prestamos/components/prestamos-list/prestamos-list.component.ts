import { Component, OnInit } from '@angular/core';
import { PrestamoService } from 'src/app/core/services/prestamo/prestamo.service';
import { PrestamoResponse } from 'src/app/core/models/prestamo-response.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prestamos-list',
  templateUrl: './prestamos-list.component.html',
  styleUrls: ['./prestamos-list.component.scss'],
})
export class PrestamosListComponent implements OnInit {
  prestamos: PrestamoResponse[] = [];
  currentPage: number = 0;
  totalPages: number = 0;
  pageSize: number = 10;

  filtrosForm!: FormGroup;

  constructor(private prestamoService: PrestamoService,
              private fb: FormBuilder) {}

  ngOnInit(): void {

    this.filtrosForm = this.fb.group({
      filtro: [''],
      estado: ['Todos'],
    });

    this.filtrosForm.valueChanges.subscribe(() => {
      this.cargarPrestamos(this.currentPage);
    });

    this.cargarPrestamos(this.currentPage);
  }

  cargarPrestamos(page: number): void {

    const filtros = this.filtrosForm.value;

    this.prestamoService.getPrestamosPaginado(page, this.pageSize, filtros).subscribe((data) => {
      this.prestamos = data.content;
      this.totalPages = data.totalPages;
    });
  }

  cambiarPagina(nuevaPagina: number): void {
    if (nuevaPagina >= 0 && nuevaPagina < this.totalPages) {
      this.currentPage = nuevaPagina;
      this.cargarPrestamos(this.currentPage);
    }
  }

  finalizarPrestamo(id: number): void {
    if (confirm('¿Estás seguro de finalizar este préstamo?')) {
      this.prestamoService.finalizarPrestamo(id).subscribe(() => {
        alert('El préstamo ha sido finalizado.');
        this.cargarPrestamos(this.currentPage);
      });
    }
  }

  eliminarPrestamo(id: number): void {
    if (confirm('¿Estás seguro de eliminar este préstamo?')) {
      this.prestamoService.deletePrestamo(id).subscribe(() => {
        alert('El préstamo ha sido eliminado.');
        this.cargarPrestamos(this.currentPage);
      });
    }
  }
}
