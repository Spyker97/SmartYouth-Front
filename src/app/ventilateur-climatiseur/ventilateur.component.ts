import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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
    ])
  ]
})

export class VentilateurComponent implements OnInit {
  @ViewChild('snowflakeIcon') snowflakeIcon!: ElementRef;
  @ViewChild('ceilingContainer') ceilingContainer!: ElementRef;

  constructor(private renderer: Renderer2) { }
  
  ngOnInit(): void {
  }
  fans = 
    { id: 1, status: false }
    clims = 
    { id: 1, status: false }
    // Add more fans as needed
  ;

  toggleFanStatus(): void {
    this.fans.status = !this.fans.status;

    if (this.fans.status) {
      this.rotateFan(360);
    } else {
      this.rotateFan(0);
    }
  }

  private rotateFan(degrees: number): void {
    this.renderer.setStyle(this.ceilingContainer.nativeElement, 'transform', `rotate(${degrees}deg)`);
  }
  
  toggleSnowflake() {
    this.clims.status = !this.clims.status;

    // You can remove the following lines if ngClass is handling the classes for you
    if (this.clims.status) {
      this.renderer.addClass(this.snowflakeIcon.nativeElement, 'fa-spin');
      this.renderer.addClass(this.snowflakeIcon.nativeElement, 'big_on');
    } else {
      this.renderer.removeClass(this.snowflakeIcon.nativeElement, 'fa-spin');
      this.renderer.removeClass(this.snowflakeIcon.nativeElement, 'big_on');
    }
  }
}

