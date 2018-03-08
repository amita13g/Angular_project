import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() title: string;
  @Output() buttonClicked = new EventEmitter();

  name: string;
  flag: boolean;

  constructor() { 
   
  }

  ngOnInit() {
    this.name = this.title;
    this.flag = true;
  }

  testEvent() {
    this.buttonClicked.emit(this.name);
    this.flag = !this.flag;
  }
}
