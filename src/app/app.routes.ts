import { Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { AdditionComponent } from './game/addition/addition.component';

export const routes: Routes = [
  { path: '', component: GameComponent }, // Default route
  { path: 'addition', component: AdditionComponent },
  { path: '**', redirectTo: '' }, // Redirect unknown paths to the default route
];
