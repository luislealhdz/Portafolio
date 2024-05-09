import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaTileComponent } from './social-media-tile.component';

describe('SocialMediaTileComponent', () => {
  let component: SocialMediaTileComponent;
  let fixture: ComponentFixture<SocialMediaTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialMediaTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
