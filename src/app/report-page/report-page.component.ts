import { Component } from '@angular/core';
import { ShimmerService } from '../services/shimmer.service';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent {
  constructor(public shimmerEffect: ShimmerService){}
  inputValue : string = '';

}
