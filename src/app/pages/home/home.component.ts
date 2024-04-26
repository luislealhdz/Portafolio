import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  CARD_INFORMATION_EN,
  CARD_INFORMATION_ES
} from '../../data/constants/mocks';
import CardOptions from '../../data/interfaces/card-options';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  card_options: CardOptions[];

  constructor(private languageService: LanguageService) {
    this.card_options = this.languageService.getLanguage();
  }
}
