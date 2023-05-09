import { Component } from '@angular/core';
import { ShimmerService } from '../services/shimmer.service';


@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent {
constructor(public shimmerEffect: ShimmerService){}
}
