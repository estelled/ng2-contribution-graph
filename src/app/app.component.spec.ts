import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ContributionGraphComponent } from './contribution-graph/contribution-graph.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContributionGraphComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
