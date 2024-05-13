import {Component, OnInit} from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader, MatExpansionPanelTitle
} from "@angular/material/expansion";

interface Item {
  name: string;
  target: string;
  instructions: string [];
  gifUrl: string;
  secondaryMuscles: string[];

}

@Component({
  selector: 'app-lower-legs',
  standalone: true,
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,

  ],
  templateUrl: './lower-legs.component.html',
  styleUrl: './lower-legs.component.css'
})
export class LowerLegsComponent implements OnInit {
  items: Item[] = [];

  constructor() {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    fetch('http://localhost:8080/lower-legs')
      .then(response => response.json())
      .then((data: Item[]) => {
        this.items = data;
      })
      .catch(err => {
        console.error('Failed to load data:', err);
      });
  }
}
