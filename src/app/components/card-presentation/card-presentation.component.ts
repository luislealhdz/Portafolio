import { Component, Input } from '@angular/core';
import CardPresentation from '../../data/interfaces/card-presentation';

@Component({
  selector: 'app-card-presentation',
  standalone: true,
  imports: [],
  templateUrl: './card-presentation.component.html',
  styleUrl: './card-presentation.component.scss'
})
export class CardPresentationComponent {
  @Input() contentCard!: CardPresentation;
}
