import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  val = Math.random()
  constructor() {
  }
  test() {
    this.val = Math.random();
  }
}
