import { Component } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-switch-language',
  standalone: true,
  imports: [],
  templateUrl: './switch-language.component.html',
  styleUrl: './switch-language.component.scss'
})
export class SwitchLanguageComponent {
  constructor(private languageService: LanguageService) {}

  // TODO: Implementar observable
  toggleSwitch(event: any): void {
    const checked: boolean | null = event.target.checked;
    if (checked !== null) {
      if (checked) {
        this.languageService.setLanguage('es');
        console.log('Switch activado');
      } else {
        this.languageService.setLanguage('en');
        console.log('Switch desactivado');
      }
    }
  }
}
