import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';

interface Item {
  name: string;
  target:string;
  instructions: string [];
  gifUrl:string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            RouterOutlet,
            MatExpansionModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SportAppFrontend';
  items: Item[] = [];

  constructor() {}

  ngOnInit() {
    this.loadData();
  }

 loadData() {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then((data: Item[]) => {
        this.items = data;
      })
      .catch(err => {
        console.error('Failed to load data:', err);
      });
  }

}
