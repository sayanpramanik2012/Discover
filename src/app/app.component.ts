import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project_demo';
  buttonVisible = true;
  dataSelected = false;
  openSidePanel = false;
  clickedLabel = '';

  showPanel(label: string): void {
    this.clickedLabel = label;
    this.openSidePanel = true;
  }
  onLabelClick(label: string): void {
    this.clickedLabel = label;
  }
  // isPanelOpen = true;

  onPanelClosed(): void {
    this.openSidePanel = false;
    console.log("close triggered");
  }
  count = 0;

updateCount(newCount: number): void {
  this.count = newCount;
  console.log("appsidebar",this.count);
}
onUpdate(): void {

}


}
