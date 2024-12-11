import { Component } from '@angular/core';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { NumberRecogComponent } from './number-recog/number-recog.component';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [AdditionComponent, SubtractionComponent, NumberRecogComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  isGameSelected: boolean = false;
  isAddition = false;
  isSubtraction = false;
  isNumberRecognition = false;

  constructor(private sharedService: SharedService) {}

  toggleGameSelected() {
    this.isGameSelected = !this.isGameSelected;
    this.sharedService.setHeaderState(this.isGameSelected);
  }

  onAdditionButtonClick() {
    this.isAddition = !this.isAddition;
    this.isSubtraction = false;
    this.isNumberRecognition = false;
    this.toggleGameSelected();
  }

  onSubtractionButtonClick() {
    this.isSubtraction = !this.isSubtraction;
    this.isAddition = false;
    this.isNumberRecognition = false;
    this.toggleGameSelected();
  }

  onNumberRecognitionButtonClick() {
    this.isNumberRecognition = !this.isNumberRecognition;
    this.isAddition = false;
    this.isSubtraction = false;
    this.toggleGameSelected();
  }
}
