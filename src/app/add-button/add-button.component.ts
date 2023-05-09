import { Component, EventEmitter, Output } from '@angular/core';
import { of, delay } from 'rxjs';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent {
  isDropdownOpen = false;
  displayTable = false ;
  // showRunButton=false;
  
  @Output() statusTableDisplay = new EventEmitter<boolean>();
  @Output() statusRunButtonDisplay = new EventEmitter<boolean>();
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
  }

  toggleDropdown() {
    if (this.isDropdownOpen) {
      this.isDropdownOpen = false;
    } else {
      this.isDropdownOpen = true;
    }
  }
  showTable(){

    
      this.displayTable = true;
      this.statusTableDisplay.emit(this.displayTable);
      this.statusRunButtonDisplay.emit(true);
      // this.showRunButton = true;
    
    // this.displayTable= true;
    // this.statusTableDisplay.emit(this.displayTable)
  }
}
