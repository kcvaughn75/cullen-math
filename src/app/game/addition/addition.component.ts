import { Component } from '@angular/core';
import { AdditionOneComponent } from './addition-one/addition-one.component';

@Component({
  selector: 'app-addition',
  standalone: true,
  imports: [AdditionOneComponent],
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent {

}
