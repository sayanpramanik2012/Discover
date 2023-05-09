import { Component } from '@angular/core';
import { ShimmerService } from '../services/shimmer.service';
import { users } from 'src/assets/json/users';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent {
  constructor(public shimmerEffect: ShimmerService){}
  inputValue : string = '';
  profilename: string = '';
  permission: number | any;
  showRunButton = true;


  
  handleUsername(username: string) {
    this.profilename = username;
    //console.log("user:",this.profilename)
    const foundItem = users.find(user => user.name === this.profilename);
    if (foundItem) {
      this.permission = foundItem.per;
      //console.log("per:", this.permission)
    }
  }

}


