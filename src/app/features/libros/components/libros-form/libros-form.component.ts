import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from 'src/app/core/models/autor.model';
import { AutorService } from 'src/app/core/services/autor/autor.service';
import { LibroService } from 'src/app/core/services/libro/libro.service';

@Component({
  selector: 'app-libros-form',
  templateUrl: './libros-form.component.html',
  styleUrls: ['./libros-form.component.scss'],
})
export class LibrosFormComponent implements OnInit {
  formLibro!: FormGroup;
  libroId: number | null = null;
  autores: Autor[] = [];

  constructor(
    private fb: FormBuilder,
    private libroService: LibroService,
    private autorService: AutorService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
    this.libroId = this.route.snapshot.params['id'];
    if (this.libroId) {
      this.cargarLibro();
    }
    this.cargarAutores();
  }

  inicializarFormulario(): void {
    this.formLibro = this.fb.group({
      titulo: ['', [Validators.required]],
      autorId: [null, [Validators.required]],
      isbn: ['', [Validators.required]],
      fechaPublicacion: ['', [Validators.required]],
      estado: ['DISPONIBLE', [Validators.required]],
    });
  }

  cargarAutores(): void {
    this.autorService.getAutores().subscribe((data) => {
      this.autores = data;
    });
  }

  cargarLibro(): void {
    this.libroService.getLibro(this.libroId!).subscribe((libro) => {
      this.formLibro.patchValue(libro);
    });
  }

  guardarLibro(): void {
    if (this.libroId) {
      this.libroService.updateLibro(this.libroId, this.formLibro.value).subscribe(() => {
        this.router.navigate(['/libros']);
      });
    } else {
      this.libroService.createLibro(this.formLibro.value).subscribe(() => {
        this.router.navigate(['/libros']);
      });
    }
  }
}
