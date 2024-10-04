import { Component } from '@angular/core';
import { AdditionComponent } from './addition/addition.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [AdditionComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  isAddition = false;

  onAdditionButtonClick() {
    this.isAddition = true;
  }
}
