import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { GameComponent } from './game/game.component';
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, GameComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cullen-math-app';
  
}
