import { Component, Input } from '@angular/core';
import CardOptions from '../../data/interfaces/card-options';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';
import { SwitchLanguageComponent } from '../switch-language/switch-language.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, SliderComponent, SwitchLanguageComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() options!: CardOptions;
}
