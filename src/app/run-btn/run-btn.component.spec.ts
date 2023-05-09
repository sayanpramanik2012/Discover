import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunBtnComponent } from './run-btn.component';

describe('RunBtnComponent', () => {
  let component: RunBtnComponent;
  let fixture: ComponentFixture<RunBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunBtnComponent]
    });
    fixture = TestBed.createComponent(RunBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
