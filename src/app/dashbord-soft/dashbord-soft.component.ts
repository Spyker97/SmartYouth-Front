import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord-soft',
  templateUrl: './dashbord-soft.component.html',
  styleUrls: ['./dashbord-soft.component.css',
  ],
  
})
export class DashbordSoftComponent implements OnInit {

  isSidebarToggled: boolean = false;
  constructor() {}
  ngOnInit(): void {
  }
  
  

  
  getSidebarStyles(): any {
    return this.isSidebarToggled ? { marginLeft: '0' } : { marginLeft: '-15rem' };
  }

  sideBar(event: Event) : void{
    
    this.isSidebarToggled = !this.isSidebarToggled;

  }

  
}
