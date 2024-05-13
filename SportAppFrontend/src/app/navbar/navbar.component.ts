import { Component } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  items = ['Back', 'Cardio', 'Chest', 'Lower-arms', 'Lower-legs', 'Neck', 'Shoulders'];
}
