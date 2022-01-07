import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperInfoComponent } from './super-info.component';

describe('SuperInfoComponent', () => {
  let component: SuperInfoComponent;
  let fixture: ComponentFixture<SuperInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
