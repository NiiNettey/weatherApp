import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-air-conditions',
  templateUrl: './air-conditions.component.html',
  styleUrls: ['./air-conditions.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AirConditionsComponent {
  @Input() realFeel: number | null = null;
  @Input() windSpeed: number | null = null;
  @Input() uvIndex: number | null = null;
  @Input() chanceOfRain: number | null = null;
}
