import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LumierComponent } from './lumier.component';

describe('LumierComponent', () => {
  let component: LumierComponent;
  let fixture: ComponentFixture<LumierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LumierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LumierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
