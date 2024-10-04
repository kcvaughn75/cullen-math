import { Component, EventEmitter, Output } from '@angular/core';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [GameComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() additionGame = new EventEmitter<void>();

  onAdditionButtonClick() {
    this.additionGame.emit();
  }
}
