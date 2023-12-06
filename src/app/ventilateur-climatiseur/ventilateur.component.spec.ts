import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentilateurComponent } from './ventilateur.component';

describe('VentilateurComponent', () => {
  let component: VentilateurComponent;
  let fixture: ComponentFixture<VentilateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentilateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentilateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
