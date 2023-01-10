import { RankingService } from '../../../services/ranking.service';
import { Ranking } from './../../../models/ranking.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})

export class RankingComponent implements OnInit {

  constructor(private service: RankingService) {}
  ngOnInit(): void {
    this.getRanking()
  }
  ranking: Ranking[] = [];

  displayedColumns: string[] = ['position', 'name', 'points'];
  dataSource: Ranking[] = [];

  getRanking(){
    this.ranking = this.service.getRanking()
    this.dataSource = this.ranking
  }
}
