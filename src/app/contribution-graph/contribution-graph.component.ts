import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng2-contribution-graph',
  templateUrl: './contribution-graph.component.html',
  styleUrls: ['./contribution-graph.component.scss']
})
export class ContributionGraphComponent implements OnInit {

  @Input() startDate: string;
  colNumber = 53;
  columns = Array.from(Array(this.colNumber).keys());

  constructor() { }

  ngOnInit() {

  }

  calcYearDays() {
    const startDate = new Date(this.startDate);
    const day = startDate.getDate();
    const month = startDate.getMonth();
    const year = startDate.getFullYear() + 1;

    const endDate = new Date(year, month, day);
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const days = Math.round(
      Math.abs((endDate.getTime() - startDate.getTime()) / oneDay)
    );
    return days;
  }

  lastRow() {
    const daysInYear = this.calcYearDays();
    const lastRow = daysInYear - 7 * 52;
    return lastRow;
  }

  numRow(i: number) {
    let row = 7;
    if (i === 53) {
      row = this.lastRow();
    }
    return Array.from(Array(row).keys());
  }

}
