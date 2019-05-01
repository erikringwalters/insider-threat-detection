import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogScatterplotComponent } from './user-log-scatterplot.component';

describe('UserLogScatterplotComponent', () => {
  let component: UserLogScatterplotComponent;
  let fixture: ComponentFixture<UserLogScatterplotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLogScatterplotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLogScatterplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
