import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionGraphComponent } from './contribution-graph.component';

describe('ContributionGraphComponent', () => {
  let component: ContributionGraphComponent;
  let fixture: ComponentFixture<ContributionGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributionGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute and return the weekdays', () => {
    const startDate = '2018-12-18';
    const days = component.computeDayLabels(startDate);
    expect(days).toEqual(['Tue', 'Thu', 'Sat', 'Mon']);
  });

  it('should compute and return the fisrt month displayed ', () => {
    component.startDate = '2018-12-18';
    const month = component.index2month(0);
    expect(month).toEqual('Dec');
  });

});
