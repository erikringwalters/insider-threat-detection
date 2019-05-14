import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginKnnPlotComponent } from './plugin-knn-plot.component';

describe('PluginKnnPlotComponent', () => {
  let component: PluginKnnPlotComponent;
  let fixture: ComponentFixture<PluginKnnPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginKnnPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginKnnPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
