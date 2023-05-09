import { Component } from '@angular/core';
import { ShimmerService } from '../services/shimmer.service';

@Component({
  selector: 'app-run-btn',
  templateUrl: './run-btn.component.html',
  styleUrls: ['./run-btn.component.scss']
})
export class RunBtnComponent {
  constructor(public shimmerEffect: ShimmerService){}

}
