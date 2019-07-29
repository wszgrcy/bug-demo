import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/**
 * copy this in chrome-console and run
 */
export class AppComponent {
  a
  constructor() {
    console.log('in chrome-console return true,but in angular-project return false', 'a' in this)
  }
  code = `
export class AppComponent {
  a
  constructor() {
    console.log('in chrome-console return true,but in angular-project return false', 'a' in this)
  }

}
new AppComponent()
`
}

