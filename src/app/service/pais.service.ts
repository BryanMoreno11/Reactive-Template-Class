import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(private http: HttpClient) {}
  getPaises() {
    
    return this.http
    .get<Object[]>('https://restcountries.com/v3.1/lang/spanish')
    .pipe(
      map((res: any[]) =>
        res.map((pais) => ({ nombre: pais.name.common, codigo: pais.cca3 }))
      )
    );

    
  }
}
