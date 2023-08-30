import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Iuploads} from "../interfaces/iuploads";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = 'http://localhost/apiTest/api/';
  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8'
  });

  uploadFile(data: any) {
    return this.http.post(this.baseURL +'test/upload.php', data);
  }
}
