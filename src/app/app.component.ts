import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

    title = "ESA Portal..";
    loadedFeature = "allocation";
  
    constructor() {}

    onNavigate(feature: string){
      this.loadedFeature = feature;
    }

    ngOnInit(): void {
    }
}
