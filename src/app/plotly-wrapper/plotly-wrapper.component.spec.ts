import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlyWrapperComponent } from './plotly-wrapper.component';

describe('PlotlyWrapperComponent', () => {
  let component: PlotlyWrapperComponent;
  let fixture: ComponentFixture<PlotlyWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotlyWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotlyWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
