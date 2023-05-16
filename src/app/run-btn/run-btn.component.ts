import {Component,EventEmitter,Input,Output,ViewChild} from '@angular/core';
import { ShimmerService } from '../services/shimmer.service';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-run-btn',
  templateUrl: './run-btn.component.html',
  styleUrls: ['./run-btn.component.scss'],
})
export class RunBtnComponent {
  @Input() width!: number;
  @Input() showRunButton!: boolean;
  @Output() previewStatus = new EventEmitter<boolean>();
  [x: string]: any;

  constructor(public shimmerEffect: ShimmerService) {}
  isLoading = false;
  bottomBarIsVisible: boolean = false;
  // showRunButton = true;
  actualData = false;

  startTable() {
    this.bottomBarIsVisible = true;
    this.actualData = true;
    this.previewStatus.emit(this.actualData);
    setTimeout(() => {
      this.bottomBarIsVisible = false;
    }, 3000);
  }
}
