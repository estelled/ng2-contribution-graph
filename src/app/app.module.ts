import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ContributionGraphComponent } from './contribution-graph/contribution-graph.component';
import { ColorLegendComponent } from './color-legend/color-legend.component';



@NgModule({
  declarations: [
    AppComponent,
    ContributionGraphComponent,
    ColorLegendComponent,
  ],
  imports: [
    BrowserModule,
    NgbTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
