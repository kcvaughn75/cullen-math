import { Component, OnInit } from '@angular/core';
import { SubtractionDataService } from '../../services/subtraction-data-service';

@Component({
  selector: 'app-subtraction',
  standalone: true,
  imports: [],
  templateUrl: './subtraction.component.html',
  styleUrl: './subtraction.component.css',
})
export class SubtractionComponent implements OnInit {
  currentProblem: any = null;

  constructor(private dataService: SubtractionDataService) {}

  ngOnInit(): void {
    this.loadNextAdditionProblem();
  }

  loadNextAdditionProblem() {
    const additionProblems = this.dataService.getMathProblemsByType('subtraction');
    if (additionProblems.length > 0) {
      this.currentProblem =
        additionProblems[Math.floor(Math.random() * additionProblems.length)];
    } else {
      this.currentProblem = null;
    }
  }

  checkAnswer(selectedAnswer: number) {
    if (this.currentProblem && selectedAnswer === this.currentProblem.answer) {
      alert('Correct!');
      this.loadNextAdditionProblem(); // Load the next problem
    } else {
      alert('Try again!');
    }
  }
}
