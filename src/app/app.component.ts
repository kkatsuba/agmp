import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AGMP';

  constructor(matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fa');
  }
}
