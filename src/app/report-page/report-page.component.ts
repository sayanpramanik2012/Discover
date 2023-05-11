import { Component, Input } from '@angular/core';
import { ShimmerService } from '../services/shimmer.service';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss'],
})
export class ReportPageComponent {
  showRunButton = true;
  @Input() width: number = 0;
  constructor(public shimmerEffect: ShimmerService) {}
  inputValue: string = '';
  containerName: string = '';
  counter: number = 1;
  buttonVisible = true;

  containerCard = [{ containerName: 'Table', tableName: 'Table-1' }];

  addContainer(container: string) {
    this.counter++;
    this.containerCard.push({
      containerName: container,
      tableName: 'Table-' + this.counter.toString(),
    });
  }
  dataSelected = true;
  openSidePanel = false;
  clickedLabel = '';

  sidePanelWidth(sidePanel: number): void {
    this.width = sidePanel;
  }

  showPanel(label: string): void {
    this.clickedLabel = label;
    this.openSidePanel = true;
  }
  onLabelClick(label: string): void {
    this.clickedLabel = label;
  }
  // isPanelOpen = true;
  singleVal = 'many';
  handleValueSelected(value: string): void {
    this.singleVal = value;
    console.log('Selected value:', this.singleVal);
  }

  onPanelClosed(): void {
    this.openSidePanel = false;
    console.log('close triggered');
  }
  count = 0;

  updateCount(newCount: number): void {
    this.count = newCount;
    console.log('appsidebar', this.count);
  }
  onUpdate(): void {}
  widthupadater() {}
}
