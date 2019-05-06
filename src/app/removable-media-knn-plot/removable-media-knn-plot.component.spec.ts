import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovableMediaKnnPlotComponent } from './removable-media-knn-plot.component';

describe('RemovableMediaKnnPlotComponent', () => {
  let component: RemovableMediaKnnPlotComponent;
  let fixture: ComponentFixture<RemovableMediaKnnPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovableMediaKnnPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovableMediaKnnPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
