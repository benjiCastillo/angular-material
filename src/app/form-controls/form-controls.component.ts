import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent implements OnInit {
  ejemplo: Object = new Object();
  foods: Object = new Object();

  constructor() {
    this.ejemplo = {
      comida: "Sushi"
    }
    this.foods = [
      { value: 'steak-0', viewValue: 'Steak' },
      { value: 'pizza-1', viewValue: 'Pizza' },
      { value: 'tacos-2', viewValue: 'Tacos' }
    ];
  }

  ngOnInit() {
  }

}
