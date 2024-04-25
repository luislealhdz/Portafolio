import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CARD_INFORMATION } from '../../data/constants';
import CardOptions from '../../data/interfaces/card-options';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  card_options: CardOptions[] = CARD_INFORMATION;
}
