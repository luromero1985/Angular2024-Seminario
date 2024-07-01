import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Empanada } from './empanadas-list/Empanada';

const URL ='https://6674caed75872d0e0a978a65.mockapi.io/empanada';


@Injectable({
  providedIn: 'root'
})
export class EmpanadaDataService {


  /**
   * consume una API de Empanadas y devuelve un observable a la reespuesta
   */
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Empanada[]> {
    
    return this.http.get<Empanada[]>(URL).pipe(
      tap((empanadas: Empanada[]) => empanadas.forEach(empanada => empanada.cantidad = 0))
     
    );
  }
}
