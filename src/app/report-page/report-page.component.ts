import { Component } from '@angular/core';
import { ShimmerService } from '../services/shimmer.service';
import { users } from 'src/assets/json/users';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent { 
  showRunButton = true;

  constructor(public shimmerEffect: ShimmerService) { }
  inputValue: string = '';
  containerName: string = '';
  counter : number = 1;
  
  containerCard = [
    { containerName: 'Table', tableName: 'Table-1' },
  ];
  
  addContainer(container: string) {
    this.counter ++;
    this.containerCard.push({ containerName: container,
      tableName: 'Table-' + (this.counter).toString() });

  }

}


