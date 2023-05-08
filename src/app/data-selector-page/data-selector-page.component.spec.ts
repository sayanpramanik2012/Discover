import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSelectorPageComponent } from './data-selector-page.component';

describe('DataSelectorPageComponent', () => {
  let component: DataSelectorPageComponent;
  let fixture: ComponentFixture<DataSelectorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSelectorPageComponent]
    });
    fixture = TestBed.createComponent(DataSelectorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
