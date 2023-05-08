import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  showDataSelector=true;
  dataSelected = true;
  @Output() dataSelector= new EventEmitter<boolean>();
  checkReportPageStatus(){
    this.dataSelector.emit(this.dataSelected);
  }

  loadDataSelector(){
    this.showDataSelector=true;
}
  bottomString : string ='Choose a Dataset' ;
  handleData(bottomContent: string)
{
  this.bottomString = bottomContent;
}
}
