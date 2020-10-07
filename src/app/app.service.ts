import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiURL: string = 'http://localhost:3000/api/one';
  constructor(private http: HttpClient) { }

  public getContents() {
    return this.http.get(`${this.apiURL}/get`);
  }

  public createContent(payload: object) {
    return this.http.post(`${this.apiURL}/create`, payload);
  }
}
