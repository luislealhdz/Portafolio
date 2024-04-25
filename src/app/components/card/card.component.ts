import { Component, Input } from '@angular/core';
import CardOptions from '../../data/interfaces/card-options';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, SliderComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() options!: CardOptions;
}
