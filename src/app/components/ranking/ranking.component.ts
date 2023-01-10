import { PointingService } from './../../../services/pointing.service';
import { RankingService } from '../../../services/ranking.service';
import { Ranking } from './../../../models/ranking.models';
import { Component, OnInit } from '@angular/core';
import { Results } from 'src/models/results.models';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  constructor(
    private serviceRanking: RankingService,
    private servicePointing: PointingService
  ) {}

  ngOnInit(): void {
    this.getRanking();
    this.getPointing();
  }
  results: Results[] = [];

  displayedColumns: string[] = ['position', 'name', 'points'];
  dataSource: Ranking[] = [];

  getRanking() {
    this.serviceRanking.getResults().subscribe();
  }
  getPointing() {
    this.servicePointing.getPointing().subscribe();
  }
}
