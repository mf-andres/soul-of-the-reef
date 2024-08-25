import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = '';

  strength = 1;
  agility = 1;
  will = 1;
  eye = 1;

  tool1 = '';
  tool2 = '';
  tool3 = '';
  tool4 = '';
  tool5 = '';
  tool6 = '';

  merch1 = '';
  merch2 = '';
  merch3 = '';
  merch4 = '';
  merch5 = '';
  merch6 = '';

  body = '';
  detail = '';
  hair = '';
  age = '';

  virtue = '';
  vice = '';
  tragedy = '';
  background = '';
}
