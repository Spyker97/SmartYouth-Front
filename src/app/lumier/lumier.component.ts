import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lumier',
  templateUrl: './lumier.component.html',
  styleUrls: ['./lumier.component.css',
  "../../assets/css/soft-ui-dashboard.css"

]
})
export class LumierComponent implements OnInit {

  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void {
  }

  CloseModel() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'none';
    } 
  }



}
