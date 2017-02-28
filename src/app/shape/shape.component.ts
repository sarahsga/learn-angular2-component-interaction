import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shape } from './shape';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {

  @Input() shape: Shape;
  @Output() changeQuantity: EventEmitter<String> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  add() {
    this.shape.quantity++;
    this.changeQuantity.emit(this.shape.name + " Added");
  }

  subtract() {
    if (this.shape.quantity === 0) {
      this.changeQuantity.emit("Not enough " + this.shape.name);
      return;
    }
    this.shape.quantity--;
    this.changeQuantity.emit(this.shape.name + " Subtracted");
  }

}
