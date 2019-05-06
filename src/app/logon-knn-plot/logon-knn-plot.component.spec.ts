import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogonKnnPlotComponent } from './logon-knn-plot.component';

describe('LogonKnnPlotComponent', () => {
  let component: LogonKnnPlotComponent;
  let fixture: ComponentFixture<LogonKnnPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogonKnnPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogonKnnPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
