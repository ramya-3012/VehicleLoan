import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityVehicleComponent } from './eligibility-vehicle.component';

describe('EligibilityVehicleComponent', () => {
  let component: EligibilityVehicleComponent;
  let fixture: ComponentFixture<EligibilityVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibilityVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilityVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
