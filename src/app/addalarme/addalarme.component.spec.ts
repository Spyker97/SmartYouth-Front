import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddalarmeComponent } from './addalarme.component';

describe('AddalarmeComponent', () => {
  let component: AddalarmeComponent;
  let fixture: ComponentFixture<AddalarmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddalarmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddalarmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
