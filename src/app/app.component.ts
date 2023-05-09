import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Discover';
  dataSelected = false;
  openSidePanel = false;
  clickedLabel = '';

  showPanel(label: string): void {
    this.clickedLabel = label;
    this.openSidePanel = true;
  }
}
