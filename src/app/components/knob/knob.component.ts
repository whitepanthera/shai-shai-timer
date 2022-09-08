import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Units } from 'src/app/models/units.enums';

@Component({
  selector: 'app-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.scss']
})
export class KnobComponent implements OnInit {

  @Input() subtitle: string = "";

  @Input() innerRadius: number = 8;
  @Input() outerRadius: number = 4;

  @Input() innerColor: string = "#1976d2";
  @Input() outerColor: string = "#459cf3";

  @Input() units: Units = Units.HOURS;
  @Input() description: string = "";
  @Input() percentage: number = 0;

  constructor() { } 

  // 60 = 100%
  // 13 = ?

  ngOnInit(): void {
    console.log('this percentatge',   this.percentage);
   
    switch(this.units) {
      case Units.HOURS: {
        this.description = `${this.calculateHour()}${this.units}`;
        break;
      }
      case Units.MINUTES: {
        this.description = `${this.calculateMinutes()}${this.units}`;
        break;
      }
      case Units.SECONDS: {
        this.description = `${this.calculateSeconds()}${this.units}`;
        break;
      }
    }
    this.description = `${this.percentage}${this.units}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["percentage"] && changes["percentage"].currentValue !== changes["percentage"].previousValue) {
      console.log('this.percentage', changes["percentage"].currentValue);
      this.description = `${changes["percentage"].currentValue} ${this.units}`;
    }
  }

  calculateHour(): number {
    let totalHours: number = (this.percentage * 100) / 24;

    return totalHours;
  }

  calculateMinutes(): number {
    let totalMinutes: number = (this.percentage * 100) / 60;

    return totalMinutes;
  }
  
  calculateSeconds(): number {
    let totalSeconds: number = (this.percentage * 100) / 60;

    return totalSeconds;
  }
}
