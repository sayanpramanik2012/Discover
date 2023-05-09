import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ValueFormatterParams } from 'ag-grid-community';
import { ShimmerService } from '../services/shimmer.service';

@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.scss']
})
export class GridTableComponent {
  @ViewChild('agGrid') agGrid!: AgGridAngular;
  @Input() actualData;
  rowData: any = [];
  columnDefs: any = [];
  label: string = '$';
  // actualData = false;

  constructor(public http: HttpClient, public shimmerEffect: ShimmerService) { }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.agGrid.api.redrawRows();
    }, 3000);
  }

  test() {
    console.log(this.actualData);
  }

  ngOnInit(): void {
    this.http.get<any>('../../assets/json/gridData.json').subscribe(data => {
      console.log(this.actualData);
      this.rowData = data.rowData;
      this.columnDefs = data.columnDefs;
      this.columnDefs.forEach((column:any) => {
        if (column.field === "$"){
            column.valueFormatter = this.priceFormatter.bind(this)
            column.cellClass = 'text-align-right'
            column.width = 100 ;
        }
        if (column.field === "markets"){
          column.width = 150;
        }
        if (column.field === "periods"){
          column.width = 150;
        }
      })
    });
  }


  priceFormatter(params: ValueFormatterParams) {
    if (this.actualData) {
      return params.value;
    }
    return '####';
  }
}


