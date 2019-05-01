import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecSentScatterplotComponent } from './rec-sent-scatterplot.component';

describe('RecSentScatterplotComponent', () => {
  let component: RecSentScatterplotComponent;
  let fixture: ComponentFixture<RecSentScatterplotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecSentScatterplotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecSentScatterplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
