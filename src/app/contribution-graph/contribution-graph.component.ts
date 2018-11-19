import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng2-contribution-graph',
  templateUrl: './contribution-graph.component.html',
  styleUrls: ['./contribution-graph.component.scss']
})
export class ContributionGraphComponent implements OnInit {

  @Input() startDate: string;
  colNumber = 53;
  columns: Array<number>;
  days: Array<string>;

  constructor() { }

  ngOnInit() {
    this.columns = Array.from(Array(this.colNumber).keys());
    this.days = this.computeDayLabels(this.startDate);
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

  computeDayLabels(startDateString: string) {
    const dayTable = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ];
    const days = [];
    const startDate = new Date(startDateString);
    const startDay = startDate.getDay(); // Sunday - Saturday : 0 - 6
    for (let i = 0; i < 4; i++) {
      const mIndex = (startDay + i * 2) % 7;
      days[i] = dayTable[mIndex];
    }
    return days;
  }

  index2month(i: number) {
    const monthTable = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    const id = this.idCalc(i, 1); // always first row
    const date = new Date(this.startDate);
    date.setDate(date.getDate() + id);
    const idTable = date.getMonth(); // 0-11
    return monthTable[idTable];
  }

  idCalc(i: number, j: number) {
    return (i - 1) * 7 + j - 1;
  }
}
