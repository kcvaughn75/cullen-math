import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isGameSelected: boolean = true;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    // Subscribe to the service to receive updates
    this.sharedService.headerState$.subscribe((state: boolean) => {
      this.isGameSelected = state;
    });
  }
}
