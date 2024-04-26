import { Component, Input } from '@angular/core';
import CardOptions from '../../data/interfaces/card-options';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, SliderComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() options!: CardOptions;

  constructor(private languageService: LanguageService) {}

  // TODO: Implementar observable
  toggleSwitch(event: any): void {
    const checked: boolean | null = event.target.checked;
    if (checked !== null) {
      if (checked) {
        this.languageService.setLanguage('es');
        console.log('Switch activado');
      } else {
        this.languageService.setLanguage('en');
        console.log('Switch desactivado');
      }
    }
  }
}
