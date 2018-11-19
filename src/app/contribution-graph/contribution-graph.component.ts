import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'ng2-contribution-graph',
  templateUrl: './contribution-graph.component.html',
  styleUrls: ['./contribution-graph.component.scss']
})
export class ContributionGraphComponent implements OnInit {

  @Input() startDate: string;
  @Input() activity: any[];
  colNumber = 53;
  columns: Array<number>;
  days: Array<string>;
  activityDict: {};
  constructor() { }

  ngOnInit() {
    this.columns = Array.from(Array(this.colNumber).keys());
    this.days = this.computeDayLabels(this.startDate);
    this.activityDict = this.activity2activityDict(this.activity);
  }

  monthChanged(col: number) {
    const first =  col === 0  && this.index2month(col) === this.index2month(col + 1);
    const changed = this.index2month(col) !== this.index2month(col - 1);
    return first || changed;
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
    for (let i = 0; i < 7; i++) {
      const day = dayTable[(startDay + i) % 7];
      if  (i % 2 === 0) {
        days.push(day);
      } else {
        days.push(null);
      }
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

  id2date(id: number) {
    const result = new Date(this.startDate);
    result.setDate(result.getDate() + id);
    return result.toDateString();
  }

  computeTooltipText(i: number, j: number) {
    const id =  this.idCalc(i, j);
    const date = this.id2date(id);
    let contNumber = 'no';
    if (this.activityDict[date]) {
      contNumber = this.activityDict[date];
    }
    const text = contNumber + ' contributions on ' + date;

    return text;
  }

  activity2activityDict(activityTable: any[]) {
    const activityDict = {};
    for (const activity of activityTable) {
      const tempDate = new Date(activity[0]);
      const key = tempDate.toDateString();
      activityDict[key] = activity[1];
    }
    return activityDict;
  }

}
