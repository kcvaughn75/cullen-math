import { Component } from '@angular/core';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { NumberRecogComponent } from './number-recog/number-recog.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [AdditionComponent, SubtractionComponent, NumberRecogComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  isAddition = false;
  isSubtraction = false;
  isNumberRecognition = false;

  onAdditionButtonClick() {
    this.isAddition = !this.isAddition;
    this.isSubtraction = false;
  }

  onSubtractionButtonClick() {
    this.isSubtraction = !this.isSubtraction;
    this.isAddition = false;
  }

  onNumberRecognitionButtonClick() {
    this.isNumberRecognition = !this.isNumberRecognition;
    this.isAddition = false;
    this.isSubtraction = false;
  }
}
