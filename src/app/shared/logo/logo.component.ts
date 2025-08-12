import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  width = input<number>(180);
  height = input<number>(180);
  primaryColor = input<string>('#811331');
  secondaryColor = input<string>('#5b0d20');
}
