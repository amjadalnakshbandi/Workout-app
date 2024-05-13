import {Component} from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader, MatExpansionPanelTitle
} from "@angular/material/expansion";
import {NgForOf} from "@angular/common";

interface Item {
  name: string;
  target: string;
  instructions: string [];
  gifUrl: string;
  secondaryMuscles: string[];

}

@Component({
  selector: 'app-lower-arms',
  standalone: true,
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    NgForOf
  ],
  templateUrl: './lower-arms.component.html',
  styleUrl: './lower-arms.component.css'
})

export class LowerArmsComponent {
  items: Item[] = [];

  constructor() {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    fetch('http://localhost:8080/lower-arms')
      .then(response => response.json())
      .then((data: Item[]) => {
        this.items = data;
      })
      .catch(err => {
        console.error('Failed to load data:', err);
      });
  }

}
