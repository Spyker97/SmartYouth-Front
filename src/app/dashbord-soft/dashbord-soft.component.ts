import { Component, OnInit , HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashbord-soft',
  templateUrl: './dashbord-soft.component.html',
  styleUrls: ['./dashbord-soft.component.css',
  ]})
export class DashbordSoftComponent implements OnInit {
  private readonly screenWidthThreshold = 1000;


  isSidebarToggled: boolean = window.innerWidth > this.screenWidthThreshold;
  constructor(private router: Router , private route: ActivatedRoute) {}
  ngOnInit(): void {

    this.redirectToDashboard();
   
  }

  

  
  getSidebarStyles(): any {
    return this.isSidebarToggled ? { marginLeft: '0' } : { marginLeft: '-15rem' };
  }

  sideBar(event: Event) : void{
    
    this.isSidebarToggled = !this.isSidebarToggled;

  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    // Your logic to handle screen size changes
  this.isSidebarToggled = window.innerWidth > this.screenWidthThreshold;

  console.log(this.isSidebarToggled); 
  }



  redirectToDashboard(): void {
    // Navigate to the 'dashboard' route within the 'home' route
    const currentChildRoute = this.route.firstChild;

    // Get the path of the current child route
    const currentChildPath = currentChildRoute?.snapshot.routeConfig?.path;
    if(currentChildPath == undefined){
      this.router.navigate(['/home', { outlets: { 'adminbody': ['dashboard'] } }]);
    }
  }

  
}
