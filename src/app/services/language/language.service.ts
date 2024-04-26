import { Injectable } from '@angular/core';
import CardOptions from '../../data/interfaces/card-options';
import {
  CARD_INFORMATION_EN,
  CARD_INFORMATION_ES
} from '../../data/constants/mocks';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor() {}

  setLanguage(lang: string): void {
    localStorage.setItem('language', lang);
  }

  getLanguage(): CardOptions[] {
    const lang: string = localStorage.getItem('language') || 'es';
    return lang === 'es' ? CARD_INFORMATION_ES : CARD_INFORMATION_EN;
  }
}
