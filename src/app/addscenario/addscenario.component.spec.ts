import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddscenarioComponent } from './addscenario.component';

describe('AddscenarioComponent', () => {
  let component: AddscenarioComponent;
  let fixture: ComponentFixture<AddscenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddscenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddscenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
