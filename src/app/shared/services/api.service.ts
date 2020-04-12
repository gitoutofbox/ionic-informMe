import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  get(url: string) {
    return this.http.get(url);
  }

  post(url: string, postData: Object) {
    return this.http.post(url, postData);
  }
}
