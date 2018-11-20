import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activity = [
    ['2019-08-03', '86'], ['2015-06-04', '99'], ['2018-06-12', '24'],
    ['2018-08-01', '8'], ['2019-02-24', '35'], ['2019-07-24', '2'],
    ['2018-12-24', '34'], ['2019-07-31', '18']
  ];

}
