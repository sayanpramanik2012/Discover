import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShimmerService {
  shimmerActive: boolean = false;
  actualData: boolean = false;
  displayTable: boolean = false;
  showRunButton: boolean = true;
  bottomBarIsVisible: boolean = false;

  constructor() {}
  shimmering() {
    this.shimmerActive = true;

    setTimeout(() => {
      this.shimmerActive = false;
    }, 2500);
    console.log('dummy');
  }

  onCancel() {
    this.displayTable = true;
    this.actualData = false;
    this.shimmerActive = false;
    this.showRunButton = true;
    this.bottomBarIsVisible = false;
  }
}
