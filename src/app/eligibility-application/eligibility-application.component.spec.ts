import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityApplicationComponent } from './eligibility-application.component';

describe('EligibilityApplicationComponent', () => {
  let component: EligibilityApplicationComponent;
  let fixture: ComponentFixture<EligibilityApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibilityApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilityApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
