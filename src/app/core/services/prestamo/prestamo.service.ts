import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prestamo } from '../../models/prestamo.model';
import { PrestamoResponse } from '../../models/prestamo-response.model';

@Injectable({
  providedIn: 'root',
})
export class PrestamoService {
  private apiUrl = 'http://localhost:8080/api/prestamos';

  constructor(private http: HttpClient) {}

  // Obtener todos los préstamos
  getPrestamos(): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>(this.apiUrl);
  }

  // Obtener todos los préstamos - Paginado
  getPrestamosPaginado(page: number, size: number, filtros: any): Observable<any> {

    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('filtro', filtros.filtro)
      .set('estado', filtros.estado);

    return this.http.get<any>(`${this.apiUrl}/paginado`, { params });
  }

  // Crear un nuevo préstamo
  createPrestamo(prestamo: Prestamo): Observable<Prestamo> {
    return this.http.post<Prestamo>(`${this.apiUrl}/libro`, prestamo);
  }

  // Actualizar un prestamo existente
  updatePrestamo(id: number, prestamo: Prestamo): Observable<Prestamo> {
    return this.http.put<Prestamo>(`${this.apiUrl}/${id}`, prestamo);
  }

  // Finalizar un préstamo
  finalizarPrestamo(id: number): Observable<Prestamo> {
    return this.http.put<Prestamo>(`${this.apiUrl}/finalizar/${id}`, {});
  }

  // Eliminar un préstamo
  deletePrestamo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Obtener un prestamo por ID
  getPrestamo(id: number): Observable<PrestamoResponse> {
    return this.http.get<PrestamoResponse>(`${this.apiUrl}/${id}`);
  }
}
