import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimmingComponent } from './dimming.component';

describe('DimmingComponent', () => {
  let component: DimmingComponent;
  let fixture: ComponentFixture<DimmingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimmingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DimmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
