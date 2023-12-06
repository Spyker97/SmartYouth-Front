import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DialogService } from '../dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { DimmingComponent } from '../dimming/dimming.component';


@Component({
  selector: 'app-testalert',
  templateUrl: './testalert.component.html',
  styleUrls: ['./testalert.component.css']
})
export class TestalertComponent implements OnInit {

  constructor(private dialogService: DialogService , private dialogRef : MatDialog) { }

  ngOnInit(): void {
  }

  // sweetalert
  showAlert() {
    this.Alert('Hello', 'This is a SweetAlert message','error');
  }
  Alert(title: string, text: string, icon: 'success' | 'error' | 'warning' | 'info' = 'success') {
    return Swal.fire({
      title,
      text,
      icon,
    });
  }

  //Dialog
  openFormDialog() {
    this.dialogService.openFormDialog().subscribe(result => {
      if (result) {
        // Handle form submission result
        console.log('Form submitted with data:', result);
      } else {
        // Handle cancel button or closing the dialog
        console.log('Dialog closed without form submission');
      }
    });
  }


  openDialog(){
    this.dialogRef.open(DimmingComponent);
  }



  openModel() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'block';
    } 
  }

  CloseModel() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'none';
    } 
  }

}
