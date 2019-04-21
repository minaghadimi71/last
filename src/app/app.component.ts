import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Max';
  show: boolean = false;
  show1() {
    this.show = !this.show;
  }
  delete() {
    this.show = false;
  }
}
