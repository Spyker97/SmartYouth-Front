import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-dimming',
  templateUrl: './dimming.component.html',
  styleUrls: ['./dimming.component.css' ,
  "../../assets/css/soft-ui-dashboard.css"
]
})
export class DimmingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  brightness = 1; // Initialize brightness to 0

  getBackgroundColor(): string {
    console.log(this.brightness)
    const hue = 60; // Hue for yellow color
    const saturation = 100; // Full saturation for vivid color
    const lightness = 100 -this.brightness /2  ; // Vary lightness from 0% to 100%

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }


}
