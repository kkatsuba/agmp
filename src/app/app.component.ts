import { Component } from '@angular/core';
import { MatIconRegistry } from '../../node_modules/@angular/material';

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
