import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes the service accessible application-wide
})
export class SharedService {
  private headerStateSource = new BehaviorSubject<boolean>(false); // Default state
  headerState$ = this.headerStateSource.asObservable(); // Observable for headerComponent to subscribe to

  // Method to update the header state
  setHeaderState(isGameSelected: boolean) {
    this.headerStateSource.next(isGameSelected);
  }
}
