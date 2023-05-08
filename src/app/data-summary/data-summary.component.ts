import { Component,  Input } from '@angular/core';
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
  


  ontest() {
    console.log(this.sharedDataSummary)
  }
}
