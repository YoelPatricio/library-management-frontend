import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AutorService } from 'src/app/core/services/autor/autor.service';

@Component({
  selector: 'app-autores-form',
  templateUrl: './autores-form.component.html',
  styleUrls: ['./autores-form.component.scss'],
})
export class AutoresFormComponent implements OnInit {
  formAutor!: FormGroup;
  autorId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private autorService: AutorService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
    this.autorId = this.route.snapshot.params['id'];
    if (this.autorId) {
      this.cargarAutor();
    }
  }

  inicializarFormulario(): void {
    this.formAutor = this.fb.group({
      nombre: ['', [Validators.required]],
      nacionalidad: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
    });
  }

  cargarAutor(): void {
    this.autorService.getAutor(this.autorId!).subscribe((autor) => {
      this.formAutor.patchValue(autor);
    });
  }

  guardarAutor(): void {
    if (this.autorId) {
      this.autorService.updateAutor(this.autorId, this.formAutor.value).subscribe(() => {
        this.router.navigate(['/autores']);
      });
    } else {
      this.autorService.createAutor(this.formAutor.value).subscribe(() => {
        this.router.navigate(['/autores']);
      });
    }
  }
}
