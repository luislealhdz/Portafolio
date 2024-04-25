import { Component } from '@angular/core';
import { ImageTileComponent } from '../image-tile/image-tile.component';
import ImageTile from '../../data/interfaces/image-tile';
import { IMAGE_TILE_DATA } from '../../data/constants';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [ImageTileComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  imageTiles: ImageTile[] = IMAGE_TILE_DATA;
}
