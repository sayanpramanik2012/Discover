import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, count } from 'rxjs';
import summaryData from '../../assets/jsondata/summary.json';
import valuesData from '../../assets/jsondata/extradata.json';
// import {navigationItems} from '../../assets/jsondata/summary.json'
interface SelectionItem {
  label: string;
  value: string[];
  prefix: string;
}
interface ValueItem {
  value: string;
  data: string[];
  checked: boolean;
}

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent{
  @Input() label!: string;
  @Output() panelClosed = new EventEmitter<void>();
  data: any = summaryData;
  filteredData: any;
  values: any = valuesData;
  filteredValues: string[] = [];
  selectButtonText!: string;
  pan1 = true;

  @Output() valueSelected = new EventEmitter<string>();

  ngOnChanges(): void {
    this.filteredData = this.data.data.find((item: { label: string }) => item.label === this.label);
    const valueItem = this.values.find(item => item.label === this.label);
    if (valueItem) {
      this.filteredValues = valueItem.data;
    }
    this.updateSelectButtonText();
  }
  updateSelectButtonText(): void {
    const numSelected = this.filteredData.value.length;
  }
  @Output() countChanged = new EventEmitter<number>();
  removeValue(index: number): void {
    this.filteredData.value.splice(index, 1);
    this.countChanged.emit(this.filteredData.value.length);
  }
  isSelected(value: string): boolean {
    return this.filteredData.value.includes(value);
  }

  showValues = false;
  addValue(): void {
    this.showValues = true;
    this.pan1 = false;
  }
  back(): void{
    this.pan1=true;
  }


  selectValue(value: string): void {
    const index = this.filteredData.value.indexOf(value);

    if (index !== -1) {
      this.filteredData.value.splice(index, 1); // Uncheck the checkbox, remove value from array
    } else {
      this.filteredData.value.push(value); // Check the checkbox, add value to array
    }

    this.countChanged.emit(this.filteredData.value.length);
    if (this.filteredData.value.length === 1) {
      this.valueSelected.emit(this.filteredData.value[0]); // Emit the selected value
    }
    if (this.filteredData.value.length === 0) {
      this.showValues = false;
    }
  }


  constructor(){}

  closePanel(): void {
    this.panelClosed.emit();
  }

}
