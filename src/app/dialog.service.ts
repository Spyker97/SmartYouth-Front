import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddscenarioComponent } from './addscenario/addscenario.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openFormDialog() {
    const dialogRef = this.dialog.open(AddscenarioComponent, {
      width: '400px',
      data: {
        title: 'Form Dialog',
      },
    });

    return dialogRef.afterClosed();
  }
}
