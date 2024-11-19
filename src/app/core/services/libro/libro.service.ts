import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../../models/libro.model';
import { LibroResponse } from '../../models/libro-response.model';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  private apiUrl = 'http://localhost:8080/api/libros';

  constructor(private http: HttpClient) {}

  // Obtener todos los libros
  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl);
  }

  // Obtener todos los libros - Paginado
  getLibrosPaginado(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<any>(`${this.apiUrl}/paginado`, { params });
  }

  // Obtener un libro por ID
  getLibro(id: number): Observable<LibroResponse> {
    return this.http.get<LibroResponse>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo libro
  createLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.apiUrl, libro);
  }

  // Actualizar un libro existente
  updateLibro(id: number, libro: Libro): Observable<Libro> {
    return this.http.put<Libro>(`${this.apiUrl}/${id}`, libro);
  }

  // Eliminar un libro
  deleteLibro(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Verificar disponibilidad de un libro
  checkDisponibilidad(isbn: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/disponibilidad/${isbn}`);
  }
}
