import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  armours,
  backgrounds,
  bodies,
  details,
  elements,
  forms,
  hairs,
  powers,
  tools,
  tragedies,
  vices,
  virtues,
  weapons,
} from './arrays';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  strength = this.init_bonus();
  agility = this.init_bonus();
  will = this.init_bonus();
  eye = this.init_bonus();

  weapon = this.init_weapon();
  armour = this.init_armour();
  tool1 = this.init_tool();
  tool2 = this.init_tool();

  body = bodies[this.d6() - 1];
  detail = details[this.d6() - 1];
  hair = hairs[this.d6() - 1];
  age = this.init_age();

  virtue = virtues[this.d6() - 1];
  vice = vices[this.d6() - 1];
  tragedy = tragedies[this.d6() - 1];
  background = backgrounds[this.d36() - 1];

  d6(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  _2d6(): number {
    return this.d6() + this.d6();
  }

  init_bonus(): number {
    return Math.ceil(this.d6() / 2);
  }

  init_weapon(): string {
    const d6_ = this.d6();
    if (d6_ == 6) {
      return 'Hechizo: ' + this.spell();
    }
    return weapons[d6_ - 1];
  }

  spell(): string {
    const d4_ = this.d4();
    const form = forms[this.d36() - 1];
    const element = elements[this.d36() - 1];
    const power = powers[this.d36() - 1];
    if (d4_ == 1) {
      return `${element} de ${power}`;
    }
    if (d4_ == 2) {
      return `${form} ${power}`;
    }
    if (d4_ == 3) {
      return `${form} de ${element}`;
    }
    if (d4_ == 4) {
      return `${form} de ${element} ${power}`;
    }
    return '';
  }

  d4(): number {
    return Math.floor(Math.random() * 4) + 1;
  }

  d36(): number {
    return Math.floor(Math.random() * 36) + 1;
  }

  init_armour(): string {
    return armours[this.d6() - 1];
  }

  init_tool(): string {
    return tools[this.d36() - 1];
  }

  init_age(): number {
    return (
      this.d6() + this.d6() + this.d6() + this.d6() + this.d6() + this.d6() + 10
    );
  }
}
