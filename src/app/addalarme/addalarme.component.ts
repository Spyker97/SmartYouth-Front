import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addalarme',
  templateUrl: './addalarme.component.html',
  styleUrls: ['./addalarme.component.css',"../../assets/css/soft-ui-dashboard.css"]
})
export class AddalarmeComponent implements OnInit {
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
