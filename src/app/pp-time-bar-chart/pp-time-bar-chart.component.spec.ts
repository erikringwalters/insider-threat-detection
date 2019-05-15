import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpTimeBarChartComponent } from './pp-time-bar-chart.component';

describe('PpTimeBarChartComponent', () => {
  let component: PpTimeBarChartComponent;
  let fixture: ComponentFixture<PpTimeBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpTimeBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpTimeBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
