import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import summaryData from '../../assets/jsondata/summary.json';
import valuesData from '../../assets/jsondata/extradata.json';

interface SelectionItem {
  label: string;
  value: string[];
  prefix: string;
}
interface ValueItem {
  value: string;
  data: string[];
  checked: boolean;
}

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
})
export class SidePanelComponent {
  @Input() label!: string;
  @Output() panelClosed = new EventEmitter<void>();
  data: any = summaryData;
  filteredData: any;
  values: any = valuesData;
  num: number = 0;
  filteredValues: string[] = [];
  selectButtonText!: string;
  pan1 = true;

  @Output() sidePanelWidth = new EventEmitter<number>();
  @ViewChild('sidePanel') sidePanelRef!: ElementRef;

  @Output() valueSelected = new EventEmitter<string>();
  ngAfterViewInit() {
    const sidePanelWidth = this.sidePanelRef.nativeElement.offsetWidth;
    this.sidePanelWidth.emit(sidePanelWidth);
  }

  ngOnChanges(): void {
    this.filteredData = this.data.data.find(
      (item: { label: string }) => item.label === this.label
    );
    const valueItem = this.values.find((item) => item.label === this.label);
    if (valueItem) {
      this.filteredValues = valueItem.data;
    }
    this.updateSelectButtonText();
    this.num = this.filteredData.value.length;
  }
  @Output() countChanged = new EventEmitter<number>();

  isSelected(value: string): boolean {
    return this.filteredData.value.includes(value);
  }

  selectAllValues(): void {
    const allSelected =
      this.filteredData.value.length === this.filteredValues.length;
    if (allSelected) {
      this.filteredData.value = []; // Deselect all values
    } else {
      this.filteredData.value = [...this.filteredValues]; // Select all values
    }
    this.updateSelectButtonText();
    this.countChanged.emit(this.filteredData.value.length);
    this.num = this.filteredData.value.length;
  }

  updateSelectButtonText(): void {
    const allSelected =
      this.filteredData.value.length === this.filteredValues.length;
    this.selectButtonText = allSelected ? 'Deselect All' : 'Select All';
  }

  showValues = false;
  addValue(): void {
    this.showValues = true;
    this.pan1 = false;
  }
  back(): void {
    this.pan1 = true;
  }

  selectValue(value: string): void {
    const index = this.filteredData.value.indexOf(value);

    if (index !== -1) {
      this.filteredData.value.splice(index, 1); // Uncheck the checkbox, remove value from array
    } else {
      this.filteredData.value.push(value); // Check the checkbox, add value to array
    }

    this.countChanged.emit(this.filteredData.value.length);
    this.num = this.filteredData.value.length;

    if (this.filteredData.value.length === 0) {
      this.showValues = true;
    }

    if (this.filteredData.value.length === 1) {
      this.valueSelected.emit(this.filteredData.value[0]); // Emit the selected value
    }
  }
  removeValue(index: number): void {
    this.filteredData.value.splice(index, 1);
    this.countChanged.emit(this.filteredData.value.length);
    this.num = this.filteredData.value.length;
    if (this.filteredData.value.length === 1) {
      this.valueSelected.emit(this.filteredData.value[0]); // Emit the selected value
    }
  }

  constructor() {}

  closePanel(): void {
    this.panelClosed.emit();
    console.log(this.panelClosed);
    this.sidePanelWidth.emit(0);
  }
}
