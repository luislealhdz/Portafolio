import { Component } from '@angular/core';
import { SOCIAL_MEDIA_ICONS } from '../../data/constants/mocks';
import ImageTile from '../../data/interfaces/image-tile';
import { SocialMediaTileComponent } from '../social-media-tile/social-media-tile.component';
import SocialMediaTile from '../../data/interfaces/social-media-tile';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [SocialMediaTileComponent],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  imagesTiles: SocialMediaTile[] = SOCIAL_MEDIA_ICONS;
}
