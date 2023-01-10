import { Ranking } from './../../../models/ranking.models';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})

export class RankingComponent {
  ELEMENT_DATA: Ranking[] = [
  {position: "1", name: 'arnold', points: 1000}
  ];

  displayedColumns: string[] = ['position', 'name', 'points'];
  dataSource = this.ELEMENT_DATA;
}
