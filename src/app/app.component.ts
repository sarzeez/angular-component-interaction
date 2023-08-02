import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-component-interaction';
  isDarkMode: boolean = false;

  changeTheme() {
    if (this.isDarkMode) {
      this.isDarkMode = false;
      return;
    }
    this.isDarkMode = true;
  }
}
