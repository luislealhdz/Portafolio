import { Component } from '@angular/core';
import { CardPresentationComponent } from '../../components/card-presentation/card-presentation.component';
import { SliderComponent } from '../../components/slider/slider.component';
import CardPresentation from '../../data/interfaces/card-presentation';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CardPresentationComponent, SliderComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  card_presentation: CardPresentation[];

  constructor(private languageService: LanguageService) {
    this.card_presentation = this.languageService.getLanguageForAboutPage();
  }
}
