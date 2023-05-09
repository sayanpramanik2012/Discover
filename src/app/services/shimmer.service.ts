import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShimmerService {
  shimmerActive: boolean=false;

  constructor() { }
  shimmering(){
    this.shimmerActive=true;
  
    setTimeout(()=> {
      this.shimmerActive=false;
    }, 3000
    )
    console.log("dummy")
  }
}
