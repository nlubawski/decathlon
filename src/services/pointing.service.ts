import { Pointing } from './../models/pointing.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointingService {
  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:3000/pointing';

  getPointing(): Observable<Pointing[]>{
    return this.http.get<Pointing[]>(this.API);
  }
}
