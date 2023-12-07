import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-etage',
  templateUrl: './etage.component.html',
  styleUrls: ['./etage.component.css'
]
})
export class EtageComponent implements OnInit {
  
  dynamicHtmlContent: string = '';

  nav : any = [true , false];
  active : any =  ["active" , "" , ""];
  

  constructor() { }

  ngOnInit(): void {
  }


  
  navigate(nbr : number){
 this.nav = [false , false] ; 
 this.nav[nbr] = true ; 
 this.active= ["","",""];
 this.active[nbr] = "active";
  }

  navbarstylelumier(): any {
    return !this.nav[0] ? { display: 'none' } : {  };
  }

  navbarstyleclimatiseur(): any {
    return !this.nav[1] ? { display: 'none' } : {};
  }




 

}
