import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdditionDataService {
  private mathProblems = [
    {
      id: 1,
      type: 'addition',
      number1: 5,
      number2: 3,
      answer: 8,
      choices: [7, 8, 10, 6], // One correct answer and three wrong
    },
    {
      id: 2,
      type: 'addition',
      number1: 7,
      number2: 2,
      answer: 9,
      choices: [9, 12, 8, 11],
    },
    {
      id: 3,
      type: 'addition',
      number1: 10,
      number2: 4,
      answer: 14,
      choices: [14, 15, 13, 12],
    },
  ];

  getMathProblems() {
    return this.mathProblems;
  }

  getMathProblemsByType(type: string) {
    return this.mathProblems.filter((problem) => problem.type === type);
  }
}
