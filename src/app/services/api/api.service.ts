import { Injectable } from '@angular/core';
import { default as feathers, Service, Application } from '@feathersjs/feathers';
import { default as feathersRest } from '@feathersjs/rest-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private app: Application;

  constructor(private http: HttpClient) {
    this.app = feathers();
    const rest = feathersRest(environment.apiHost);
    this.app.configure(rest.angularHttpClient(this.http, { HttpHeaders }));
  }

  service(name): Service<any> {
    return this.app.service(name);
  }
}
