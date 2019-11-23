import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedemoComponent } from './deletedemo.component';

describe('DeletedemoComponent', () => {
  let component: DeletedemoComponent;
  let fixture: ComponentFixture<DeletedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
