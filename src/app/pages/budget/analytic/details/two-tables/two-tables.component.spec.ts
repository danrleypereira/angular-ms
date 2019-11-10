import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoTableComponent } from './two-tables.component';

describe('TwoTableComponent', () => {
  let component: TwoTableComponent;
  let fixture: ComponentFixture<TwoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
