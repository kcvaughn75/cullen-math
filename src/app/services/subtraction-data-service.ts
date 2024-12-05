import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubtractionDataService {
  private mathProblems = [
    {
      id: 1,
      type: 'subtraction',
      number1: 2,
      number2: 1,
      answer: 1,
      choices: [7, 8, 1, 6], // One correct answer and three wrong
    },
    {
      id: 2,
      type: 'subtraction',
      number1: 7,
      number2: 2,
      answer: 5,
      choices: [9, 5, 8, 11],
    },
    {
      id: 3,
      type: 'subtraction',
      number1: 10,
      number2: 4,
      answer: 6,
      choices: [14, 6, 3, 12],
    },
  ];

  getMathProblems() {
    return this.mathProblems;
  }

  getMathProblemsByType(type: string) {
    return this.mathProblems.filter((problem) => problem.type === type);
  }
}
