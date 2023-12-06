import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-ventilateur',
  templateUrl: './ventilateur.component.html',
  styleUrls: ['./ventilateur.component.css','../../assets/css/nucleo-icons.css'
  ,'../../assets/css/nucleo-svg.css','../../assets/css/nucleo-svg.css',
  '../../assets/css/soft-ui-dashboard.css'],
  animations: [
    trigger('rotateFan', [
      state('rotate', style({
        transform: 'rotate(360deg)',
      })),
      state('notRotate', style({
        transform: 'rotate(0deg)',
      })),
      transition('rotate <=> notRotate', animate('500ms ease-in-out')),
    ]),
  ]
})

export class VentilateurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fans = 
    { id: 1, status: false }
    // Add more fans as needed
  ;

  toggleFanStatus(): void {
    this.fans.status = !this.fans.status;
  }
}

