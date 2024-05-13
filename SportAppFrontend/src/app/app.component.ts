import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {NavbarComponent} from "./navbar/navbar.component";

interface Item {
  name: string;
  target: string;
  instructions: string [];
  gifUrl: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    MatExpansionModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SportAppFrontend';
}
