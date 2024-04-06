import { Injectable } from '@angular/core';
import { Categoria } from '@categorias/models/categoria.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaservicesService {

  // private urlAPI = 'http://localhost:8000/API/Categoria/';
  private urlAPI = 'http://127.0.0.1:8000/API/Categoria/';

  constructor(private http: HttpClient) {}

  public getCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.urlAPI).pipe(
      catchError(error => {
        console.error('Error al obtener las categorías:', error);
        return throwError('Error al obtener las categorías. Por favor, inténtalo de nuevo más tarde.'); // Maneja el error y emite un error observable
      })
    );
  }

  public postCategoria(categoria: Categoria): Observable<any> {

    categoria.nombre = categoria.nombre.toUpperCase();
    categoria.descripcion = categoria.descripcion.toUpperCase();
  

    const formData = new FormData();
    formData.append('nombre', categoria.nombre);
    formData.append('descripcion', categoria.descripcion);
    formData.append('imagen', categoria.imagen);

    return this.http.post<Categoria>(this.urlAPI, formData);
  }
  
  public putCategoria(id_categoria: number, categoria: Categoria): Observable<any> {
    const url = `${this.urlAPI}${id_categoria}/`;
    const formData = this.createFormDataFromCategoria(categoria);
    console.log('Datos a enviar en la solicitud PUT:', formData);
    return this.http.put(url, formData).pipe(
      catchError(error => {
        console.error('Error en la solicitud PUT:', error);
        return throwError('Error en la solicitud PUT. Por favor, inténtalo de nuevo más tarde.');
      })
    );
  }
  
  private createFormDataFromCategoria(categoria: Categoria): FormData {
    const formData = new FormData();
    formData.append('nombre', categoria.nombre);
    formData.append('descripcion', categoria.descripcion);
    formData.append('imagen', categoria.imagen);
    return formData;
  }


  public patchCategoria(id_categoria: number, categoria: Categoria): Observable<any> {
    const url = `${this.urlAPI}${id_categoria}`;
    return this.http.patch(url, categoria);
  }

  public deleteCategoria(id_categoria: number): Observable<any> {
    const url = `${this.urlAPI}${id_categoria}/`; // Asegúrate de incluir una barra al final de la URL
    return this.http.delete(url).pipe(
      catchError(error => {
        console.error('Error al eliminar la categoría:', error);
        return throwError('Error al eliminar la categoría. Por favor, inténtalo de nuevo más tarde.'); // Maneja el error y emite un error observable
      })
    );
  }

  obtenerCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.urlAPI).pipe(
      catchError(error => {
        console.error('Error al obtener las categorías:', error);
        throw error; // Relanza el error para que el componente pueda manejarlo
      })
    );
  }
}
