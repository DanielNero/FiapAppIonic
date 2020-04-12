import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boletos',
  templateUrl: './boletos.page.html',
  styleUrls: ['./boletos.page.scss'],
})
export class BoletosPage implements OnInit {
  results: Observable<any>;
  url = "http://localhost:8084/ListaBoleto/"

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.results = this.http.get(`${this.url}${id}`)
  }

}
