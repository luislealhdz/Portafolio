import { Component, Input } from '@angular/core';
import ImageTile from '../../data/interfaces/image-tile';

@Component({
  selector: 'app-image-tile',
  standalone: true,
  imports: [],
  templateUrl: './image-tile.component.html',
  styleUrl: './image-tile.component.scss'
})
export class ImageTileComponent {
  @Input() tile!: ImageTile;
}
