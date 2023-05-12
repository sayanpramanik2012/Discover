import { HttpClient } from '@angular/common/http';
import { Component, Input, SimpleChanges } from '@angular/core';
import { ShimmerService } from '../services/shimmer.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  @Input() actualData;

  constructor(public http: HttpClient, public shimmerEffect: ShimmerService) {}

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {}, 2500);
  }
}
