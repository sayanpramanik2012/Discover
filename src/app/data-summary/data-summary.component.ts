import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges} from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import * as data from '../../assets/jsondata/summary.json';
@Component({
  selector: 'app-data-summary',
  templateUrl: './data-summary.component.html',
  styleUrls: ['./data-summary.component.scss']
})
export class DataSummaryComponent {
  // data = this.data;
  sharedDataSummary: string[] = [];
  prefixList: string[] = [];
  jsondata: any;

  currentIndex!: number;
  currentLabel!: string;
  data: any;


  constructor(private http: HttpClient,) {

    this.http.get("../../assets/jsondata/summary.json").subscribe((res) => {

      this.jsondata = res;

      this.jsondata = this.jsondata;

      this.data = this.jsondata.data;

      for (let i = 0; i < this.data.length; i++) {
        this.prefixList.push(this.data[i].prefix);
        if (this.data[i].value.length > 1) {
          this.sharedDataSummary.push((this.data[i].value.length).toString() + "  " + this.data[i].label);
        }
        else {
          this.sharedDataSummary.push(this.data[i].value[0]);
        }
      }
      // console.log("sidebar:",this.count);
    });
  }

  isClicked = false;
  @Output() openSidePanel = new EventEmitter<boolean>();
  @Output() labelClicked = new EventEmitter<string>();
  onButtonClick(i: number): void {
    this.isClicked = true;
    this.currentIndex = i;
    const label = this.data[i].label;
    this.currentLabel = label;
    console.log('Clicked label:', label);
    this.isClicked = !this.isClicked;
    this.openSidePanel.emit(true);
    this.labelClicked.emit(label);
  }


  ontest() {
    console.log(this.sharedDataSummary)
  }
}
