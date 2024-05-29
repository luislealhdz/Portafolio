import { Injectable } from '@angular/core';
import CardOptions from '../../data/interfaces/card-options';
import {
  CARD_INFORMATION_EN,
  CARD_INFORMATION_ES,
  CARD_PRESENTATION_EN,
  CARD_PRESENTATION_ES
} from '../../data/constants/mocks';
import CardPresentation from '../../data/interfaces/card-presentation';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor() {}

  setLanguage(lang: string): void {
    localStorage.setItem('language', lang);
  }

  getLanguageForHome(): CardOptions[] {
    return this.getCurrentLang() === 'es'
      ? CARD_INFORMATION_ES
      : CARD_INFORMATION_EN;
  }

  getLanguageForAboutPage(): CardPresentation[] {
    return this.getCurrentLang() === 'es'
      ? CARD_PRESENTATION_ES
      : CARD_PRESENTATION_EN;
  }

  private getCurrentLang(): string {
    return localStorage.getItem('language') || 'es';
  }
}
