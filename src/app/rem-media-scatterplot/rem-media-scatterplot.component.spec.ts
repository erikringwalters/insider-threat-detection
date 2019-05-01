import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemMediaScatterplotComponent } from './rem-media-scatterplot.component';

describe('RemMediaScatterplotComponent', () => {
  let component: RemMediaScatterplotComponent;
  let fixture: ComponentFixture<RemMediaScatterplotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemMediaScatterplotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemMediaScatterplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
