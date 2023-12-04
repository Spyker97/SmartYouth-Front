import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DimmingComponent } from '../dimming/dimming.component';

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

  openDialog(){
    this.dialogRef.open(DimmingComponent);
  }



}
