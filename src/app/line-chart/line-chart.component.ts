import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ValueFormatterParams } from 'ag-grid-community';
import { ShimmerService } from '../services/shimmer.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  @Input() actualData;


  constructor(public http: HttpClient, public shimmerEffect: ShimmerService) { }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
    }, 2500);
  }
}
