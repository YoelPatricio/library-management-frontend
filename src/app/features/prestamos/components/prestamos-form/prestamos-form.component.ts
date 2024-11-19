import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/core/models/libro.model';
import { LibroService } from 'src/app/core/services/libro/libro.service';
import { PrestamoService } from 'src/app/core/services/prestamo/prestamo.service';

@Component({
  selector: 'app-prestamos-form',
  templateUrl: './prestamos-form.component.html',
  styleUrls: ['./prestamos-form.component.scss'],
})
export class PrestamosFormComponent implements OnInit {
  formPrestamo!: FormGroup;
  prestamoId: number | null = null;
  libros: Libro[] = [];

  constructor(
    private fb: FormBuilder,
    private prestamoService: PrestamoService,
    private libroService: LibroService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
    this.prestamoId = this.route.snapshot.params['id'];
    if (this.prestamoId) {
      this.cargarPrestamo();
    }
    this.cargarLibros();
  }

  inicializarFormulario(): void {
    this.formPrestamo = this.fb.group({
      libroId: [null, [Validators.required]],
      lector: ['', [Validators.required]],
      fechaPrestamo: [new Date().toISOString().split('T')[0], [Validators.required]],
      estado: ['ACTIVO', [Validators.required]],
    });
  }

  cargarLibros(): void {
    this.libroService.getLibros().subscribe((data) => {
      this.libros = data;
    });
  }

  guardarPrestamo(): void { 
    if (this.prestamoId) {
      this.prestamoService.updatePrestamo(this.prestamoId, this.formPrestamo.value).subscribe(() => {
        this.router.navigate(['/prestamos']);
      });
    } else {
      this.prestamoService.createPrestamo(this.formPrestamo.value).subscribe(() => {
        this.router.navigate(['/prestamos']);
      });
    }
  }

  cargarPrestamo(): void {
    this.prestamoService.getPrestamo(this.prestamoId!).subscribe((libro) => {
      this.formPrestamo.patchValue(libro);
    });
  }
}
