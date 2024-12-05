import { Component, OnInit } from '@angular/core';
import { AdditionDataService } from '../../services/addition-data-service';
import { ImageComponent } from '../../image/image.component';

@Component({
  selector: 'app-addition',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css'],
})
export class AdditionComponent implements OnInit {
  currentProblem: any = null;
  showJuju = false;

  constructor(private dataService: AdditionDataService) {}

  ngOnInit(): void {
    this.loadNextAdditionProblem();
  }

  loadNextAdditionProblem() {
    const additionProblems = this.dataService.getMathProblemsByType('addition');
    if (additionProblems.length > 0) {
      this.currentProblem =
        additionProblems[Math.floor(Math.random() * additionProblems.length)];
    } else {
      this.currentProblem = null;
    }
  }

  checkAnswer(selectedAnswer: number) {
    if (this.currentProblem && selectedAnswer === this.currentProblem.answer) {
      this.showJuju = true;
      this.playAudioGreatJob();
      this.showJujuImage();
    } else {
      this.playAudioTryAgain();
    }
  }

  playAudioGreatJob() {
    const audio = new Audio();
    audio.src = 'assets/sounds/great_job.m4a'; // Path to your audio file
    audio.load();
    audio.play();
  }

  playAudioTryAgain() {
    const audio = new Audio();
    audio.src = 'assets/sounds/try_again.m4a'; // Path to your audio file
    audio.load();
    audio.play();
  }

  showJujuImage() {
    setTimeout(() => {
      this.showJuju = false;
      this.loadNextAdditionProblem();
    }, 3000);
  }
}
