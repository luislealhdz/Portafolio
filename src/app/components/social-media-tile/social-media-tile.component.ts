import { Component, Input } from '@angular/core';
import SocialMediaTile from '../../data/interfaces/social-media-tile';

@Component({
  selector: 'app-social-media-tile',
  standalone: true,
  imports: [],
  templateUrl: './social-media-tile.component.html',
  styleUrl: './social-media-tile.component.scss'
})
export class SocialMediaTileComponent {
  @Input() tile!: SocialMediaTile;
}
