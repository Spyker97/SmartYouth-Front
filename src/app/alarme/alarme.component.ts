import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarme',
  templateUrl: './alarme.component.html',
  styleUrls: ['./alarme.component.css',"../../assets/css/soft-ui-dashboard.css"]
})
export class AlarmeComponent implements OnInit {
  inputs: string[] = [''];
  inputsTem: string[] = [''];
  inputsHum :string[] = [''];
  constructor() { }

  ngOnInit(): void {
  }

  addInput() {
    this.inputs.push(''); // Add a new empty input
  }

  addTempurature(){
    this.inputsTem.push('');
  }

  addHumedity(){
    this.inputsHum.push('');
  }
}
