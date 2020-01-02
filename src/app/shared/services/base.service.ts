import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });

@Injectable()
export class BaseService {

  
  private options = { 'headers': headers };

  constructor(private http: HttpClient) { }

  // Get all
  getAll(url: any): Observable<any> {
    return this.http.get(url);
  }

  // Count all
  count(url: any): Observable<any> {
    return this.http.get(url);
  }

  // add
  add(url: any, entity: any): Observable<any> {
    return this.http.post(url, JSON.stringify(entity), this.options);
  }

  // Get by id
  getById(url: any, entity: any): Observable<any> {
    return this.http.get(url + `/${entity._id}`);
  }

  // Update by id
  editById(url: any, entity: any): Observable<any> {
    return this.http.put(url + `/${entity._id}`, JSON.stringify(entity), this.options);
  }

  // Delete by id
  deleteById(url: any, entity: any): Observable<any> {
    return this.http.delete(url + `/${entity._id}`, this.options);
  }

}
