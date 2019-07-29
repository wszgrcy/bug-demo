console.log('组件前');
import { Component } from '@angular/core';
import { Decorator1 } from './d1';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// @Decorator1()
// @Decorator2()
export class AppComponent {
  a
  constructor(private router: Router) {
    console.log('a' in this)
  }

}

console.log('组件后');