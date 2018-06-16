import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-modal-ejemplo',
  templateUrl: './modal-ejemplo.component.html',
  styleUrls: ['./modal-ejemplo.component.scss']
})
export class ModalEjemploComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<ModalEjemploComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
