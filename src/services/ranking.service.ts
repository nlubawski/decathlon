import { Injectable } from '@angular/core';
import { Ranking } from 'src/models/ranking.models';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor() { }

  getRanking(): Ranking[]{
    return [{position: "1", name: 'arnold', points: 1000}]
  }

  
}
