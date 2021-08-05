import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationVehicleComponent } from './application-vehicle.component';

describe('ApplicationVehicleComponent', () => {
  let component: ApplicationVehicleComponent;
  let fixture: ComponentFixture<ApplicationVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
