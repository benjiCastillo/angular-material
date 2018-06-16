import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalEjemploComponent } from './modal-ejemplo/modal-ejemplo.component';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-popup-modals',
  templateUrl: './popup-modals.component.html',
  styleUrls: ['./popup-modals.component.scss']
})
export class PopupModalsComponent implements OnInit {

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ModalEjemploComponent, {
      width: '250px',
      // data: { name: this.name, animal: this.animal }
    });

  }

  openSnackBar() {
    this.snackBar.open("Hola!", "OK", {
      duration: 2000,
    });
  }

}
