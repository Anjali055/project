import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempcollegeComponent } from './tempcollege.component';

describe('TempcollegeComponent', () => {
  let component: TempcollegeComponent;
  let fixture: ComponentFixture<TempcollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempcollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempcollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
