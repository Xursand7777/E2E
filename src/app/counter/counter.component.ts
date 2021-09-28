import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }

  counter = 0

  ngOnInit(): void {
  }

  increment () {
    this.counter++
  }
  decrement () {
    this.counter--
  }
}
