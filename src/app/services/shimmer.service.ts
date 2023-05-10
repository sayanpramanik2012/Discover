import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShimmerService {
  shimmerActive: boolean=false;
  actualData: boolean = false;
  displayTable: boolean = false;
 

  constructor() { }
  shimmering(){
    this.shimmerActive=true;
  
    setTimeout(()=> {
      this.shimmerActive=false;
    }, 3000
    )
    console.log("dummy")
  }

  onCancel(){
    this.displayTable =true;
    this.actualData=false;
    this.shimmerActive=false;
  }
}
