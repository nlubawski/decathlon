import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results } from 'src/models/results.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:3000/results';

  getResults(): Observable<Results[]>{
    return this.http.get<Results[]>(this.API);
  }



}
