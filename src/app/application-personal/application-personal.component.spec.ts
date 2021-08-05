import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationPersonalComponent } from './application-personal.component';

describe('ApplicationPersonalComponent', () => {
  let component: ApplicationPersonalComponent;
  let fixture: ComponentFixture<ApplicationPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
