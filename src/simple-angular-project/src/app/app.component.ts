import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'simple-angular-project';
  blazorComponentVisible: boolean;

  constructor() {
    this.blazorComponentVisible = false;
  }

  toggleBlazorComponentVisibility() {
    this.blazorComponentVisible = !this.blazorComponentVisible
  }
}
