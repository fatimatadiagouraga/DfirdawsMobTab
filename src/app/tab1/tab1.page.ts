import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  segmentModel = "favorites";

  constructor(
  ) { }

  ngOnInit() {

  }

  segmentChanged(event){
    console.log(this.segmentModel);
    
    console.log(event);
  }

}
