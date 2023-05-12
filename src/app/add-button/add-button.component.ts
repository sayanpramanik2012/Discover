import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShimmerService } from '../services/shimmer.service';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent {
  constructor(public shimmerEffect: ShimmerService) {}
  isDropdownOpen = false;
  displayTable = false;
  // showRunButton=false;

  @Output() statusTableDisplay = new EventEmitter<boolean>();
  @Output() statusRunButtonDisplay = new EventEmitter<boolean>();
  @Output() emitCardType = new EventEmitter<string>();
  @Input() width!: number;
  buttons = [
    { name: 'Table', icon: 'fa fa-table' },
    { name: 'Line Chart', icon: 'fa fa-line-chart' },
  ];
  handleButtonClick(button: string) {
    switch (button) {
      case 'Table':
        // Handle table button click
        this.showTable();
        this.toggleDropdown();
        break;
      case 'Line Chart':
        // Handle line chart button click
        this.toggleDropdown();
        break;
      default:
        break;
    }
    this.emitCardType.emit(button);
  }

  toggleDropdown() {
    if (this.isDropdownOpen) {
      this.isDropdownOpen = false;
    } else {
      this.isDropdownOpen = true;
    }
  }
  showTable() {
    of(this.shimmerEffect.shimmering())
      .pipe(
        delay(1) // adjust the delay time as needed
      )
      .subscribe(() => {
        this.displayTable = true;
        this.statusTableDisplay.emit(this.displayTable);
        this.statusRunButtonDisplay.emit(true);
        // this.showRunButton = true;
      });
    // this.displayTable= true;
    // this.statusTableDisplay.emit(this.displayTable)
  }
}
