import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandBarComponent } from './brand-bar.component';

describe('BrandBarComponent', () => {
  let component: BrandBarComponent;
  let fixture: ComponentFixture<BrandBarComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandBarComponent]
    });
    fixture = TestBed.createComponent(BrandBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
