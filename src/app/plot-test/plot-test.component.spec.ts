import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotTestComponent } from './plot-test.component';

describe('PlotTestComponent', () => {
  let component: PlotTestComponent;
  let fixture: ComponentFixture<PlotTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
