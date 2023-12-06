import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-addscenario',
  templateUrl: './addscenario.component.html',
  styleUrls: ['./addscenario.component.css',
  
  "../../assets/css/soft-ui-dashboard.css"

]
})
export class AddscenarioComponent implements OnInit {

  inputs: string[] = ['']; // Initialize with one input

  constructor() { }

 
  ngOnInit(): void {
  }

  addInput() {
    this.inputs.push(''); // Add a new empty input
  }



}
