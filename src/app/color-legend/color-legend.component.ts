import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng2-color-legend',
  templateUrl: './color-legend.component.html',
  styleUrls: ['./color-legend.component.scss']
})
export class ColorLegendComponent implements OnInit {

  @Input() colorScheme: string[];

  constructor() { }

  ngOnInit() {
  }

}
