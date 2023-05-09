import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShimmerService } from '../services/shimmer.service';


enum contentType {
  SourceType,
  Dataset,
  ViewPoint
}
@Component({
  selector: 'app-data-selector-page',
  templateUrl: './data-selector-page.component.html',
  styleUrls: ['./data-selector-page.component.scss'],
})

export class DataSelectorPageComponent implements OnInit {
  @Output() StatusDialogBox= new EventEmitter<boolean>();
  @Output() ReportFooterString = new EventEmitter<string>();

  heading: string = 'Choose a source type';
  [key: string]: any;
  isAtLeastOneCheckboxSelected = false;
  
bottomContent : string =" NielsenIq "

  dataset: any;
  sourcelist: any;
  contentType = contentType;
  currentContentType = contentType.SourceType;

  constructor(private http: HttpClient, public dialog: MatDialog, public shimmerEffect: ShimmerService) {

    this.http.get("../../assets/json/datasetSelector.json").subscribe((res) => {

      this.dataset = res;

      console.log('--- result : ', this.dataset);

      this.sourcelist = this.dataset.content_1;
      console.log(this.sourcelist);
    });
  }

  onNext(): void {
    
    this.isAtLeastOneCheckboxSelected = false;
    switch(this.currentContentType) {
      case contentType.SourceType:
        this.currentContentType = contentType.Dataset;
        this.sourcelist = this.dataset.content_2;
        this.heading = this.nextHeading;
        break;
      case contentType.Dataset:
        this.currentContentType = contentType.ViewPoint;
        this.sourcelist = this.dataset.content_3;
        this.heading = this.nextHeading;
        break;
      case contentType.ViewPoint:
        this.currentContentType = contentType.SourceType;
        this.sourcelist = this.dataset.content_1;
        this.heading = 'Choose a source type';
        break;
    }
  }

  nextHeading : string = ""

  checkboxClick(footerSource : string): void{

    if(this.currentContentType===contentType.SourceType){
      this.bottomContent= this.bottomContent + footerSource;
    }
    else{
      this.bottomContent=  this.bottomContent+ " | " + footerSource;
    }
  this.nextHeading = footerSource;
  this.isAtLeastOneCheckboxSelected=true;
  }

  showDataSelector(){
    const temp: boolean = false;
    this.StatusDialogBox.emit(temp);
  }

  updateFooterString(){
    this.ReportFooterString.emit(this.bottomContent);
  }



  ngOnInit(): void { }
  
}

