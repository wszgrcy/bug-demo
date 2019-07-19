import { Component, OnInit, SimpleChanges } from '@angular/core';
import { aa } from '../c1/class';
import { Base } from '../c1/mixin';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  // styleUrls: ['./c2.component.css'],
  inputs: ['aaaa']
})
export class C2Component extends Base implements OnInit {
  name='c2'
  constructor() { super() }

  ngOnInit() {
  }

}
