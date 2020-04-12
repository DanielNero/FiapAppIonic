import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  results: Observable<any>;
  url = "http://localhost:8084/ListaCliente"

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.results = this.http.get(`${this.url}`)
  }

}
