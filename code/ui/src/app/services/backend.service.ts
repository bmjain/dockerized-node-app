import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  API_URL = ''
  //API_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }


  getRecords(query) {
    return this.http.get<any>(this.API_URL + '/api/getData', {params: query} ).pipe(tap(data =>  {
      return data
    }))
  }
}
