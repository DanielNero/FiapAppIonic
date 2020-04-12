import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  url = "http://localhost:8084/ListaCliente"
  url2 = "http://localhost:8084/ListaBoleto/"
  constructor(private http: HttpClient) { }

  listaClientes(): Observable<any> {
    return this.http.get(`${this.url}`).pipe(
      map(results => results['Search'])
    );
    }

    listaBoletos(id) {
    return this.http.get(`${this.url2}${id}`).pipe(
      map(results => results['Search'])
    );
    }

}
