import { PointingService } from './../../../services/pointing.service';
import { RankingService } from '../../../services/ranking.service';
import { Ranking } from './../../../models/ranking.models';
import { Performance } from './../../../models/performance.models';
import { Component, OnInit } from '@angular/core';
import { Results } from 'src/models/results.models';
import { Pointing } from 'src/models/pointing.models';

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
    this.getResults();
  }

  results: Results[] = [];
  pointing: Pointing[] = [];
  ranking: Ranking[] = [];
  performances: Performance[] = [];

  displayedColumns: string[] = ['position', 'name', 'points'];
  dataSource: Ranking[] = [];

  getResults() {
    this.serviceRanking.getResults().subscribe((element) => {
      this.results = element;
      this.getPointing();
    });
  }

  getPointing() {
    this.servicePointing.getPointing().subscribe((element) => {
      this.pointing = element;
      this.getRanking();
    });
  }

  getRanking() {
    this.results.forEach((element: any) => {
      const { athlete, results } = element;
      let resultAux = 0;
      const performace: Performance = { athlete, result: 0, position: '0' };
      results.forEach((res: any) => {
        let { type, result } = res;
        const calc = this.pointing.find((item) => {
          return item.event === type;
        });
        if (calc) {
          if (calc?.type === 'field') {
            if (
              calc.event === 'Long jump' ||
              calc.event === 'High jump' ||
              calc.event === 'Pole vault'
            ) {
              result = result * 100;
            }
            resultAux += Math.round(calc.A * Math.pow(result - calc.B, calc.C));
            performace.result += resultAux;
          } else if (calc?.type === 'track') {
            if (type === '1500 m') {
              result =
                parseFloat(result.split(':')[0]) * 60 +
                parseFloat(result.split(':')[1]);
              resultAux += Math.round(
                calc.A * Math.pow(calc.B - result, calc.C)
              );
            } else if (type === '100 m') {
              resultAux += Math.round(
                (calc.A / 10) * Math.pow(calc.B - result, calc.C)
              );
            } else if (type === '400 m' || type === '100 m hurdles') {
              resultAux += Math.round(
                (calc.A / 100) * Math.pow(calc.B - result, calc.C)
              );
            } else {
              resultAux += Math.round(
                calc.A * Math.pow(calc.B - result, calc.C)
              );
            }
          }
        }
      });
      performace.result = resultAux;
      this.performances.push(performace);
    });
    this.getPosition();
    this.updataDataSource();
  }

  getPosition() {
    this.performances.sort((a, b) => b.result - a.result);
    for (let i = 0; i < this.performances.length; i++) {
      let count = i;
      if (i > 0 && this.performances[i].position !== '0') {
        count++;
        continue;
      } else {
        for (let j = i + 1; j < this.performances.length; j++) {
          if (this.performances[i].result === this.performances[j].result) {
            count++;
          }
        }
        let position = '';
        for (let j = i + 1; j <= count + 1; j++) {
          position += `${j}-`;
        }
        position = position.slice(0, -1);
        for (let k = i + 1; k <= count + 1; k++) {
          this.performances[k - 1].position = position;
        }
      }
    }
  }

  updataDataSource() {
    this.dataSource = this.performances.map((item) => {
      return {
        name: item.athlete,
        points: item.result,
        position: item.position,
      };
    });
  }
}
