import { Component, OnInit, SimpleChanges } from '@angular/core';
import { aa } from './class';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  inputs: ['aaaa']
})
export class C1Component extends aa implements OnInit {
  constructor() { super() }

  ngOnInit() {
  }
  name = 'c1'
}
