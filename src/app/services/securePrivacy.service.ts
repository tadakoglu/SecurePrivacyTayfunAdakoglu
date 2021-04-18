import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Banner } from '../models/banner.model';

@Injectable()
export class SecurePrivacyService {

  baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = 'https://fast-lowlands-95849.herokuapp.com/api/';
  }

  getBanner(): Observable<HttpResponse<Banner>> {
    return this.http.get<HttpResponse<Banner>>(this.baseURL + "common/getBanner", this.getOptions());
  }

  getOptions(): object {
    return { observe: "response", headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
  }

}
