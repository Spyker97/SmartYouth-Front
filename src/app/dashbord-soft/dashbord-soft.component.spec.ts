import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordSoftComponent } from './dashbord-soft.component';

describe('DashbordSoftComponent', () => {
  let component: DashbordSoftComponent;
  let fixture: ComponentFixture<DashbordSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordSoftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
