import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../../models/autor.model';

@Injectable({
  providedIn: 'root',
})
export class AutorService {
  private apiUrl = 'http://localhost:8080/api/autores';

  constructor(private http: HttpClient) {}

  // Obtener todos los autores
  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.apiUrl);
  }

  // Obtener todos los autores - paginado
  getAutoresPaginado(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<any>(`${this.apiUrl}/paginado`, { params });
  }

  // Obtener un autor por ID
  getAutor(id: number): Observable<Autor> {
    return this.http.get<Autor>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo autor
  createAutor(autor: Autor): Observable<Autor> {
    return this.http.post<Autor>(this.apiUrl, autor);
  }

  // Actualizar un autor existente
  updateAutor(id: number, autor: Autor): Observable<Autor> {
    return this.http.put<Autor>(`${this.apiUrl}/${id}`, autor);
  }

  // Eliminar un autor
  deleteAutor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
