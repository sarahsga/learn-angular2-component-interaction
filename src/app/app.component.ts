import { Component } from '@angular/core';
import { Shape } from './shape/shape';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shapes: Shape[];
  messageLog: string = "";

  constructor() {
    this.shapes = [
      new Shape('circle'),
      new Shape('triangle'),
      new Shape('square')
    ]
  }

  showMsg(msg) {
    this.messageLog = msg;
  }

}
