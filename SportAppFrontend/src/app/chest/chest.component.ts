import {Component, OnInit} from '@angular/core';
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
  selector: 'app-chest',
  standalone: true,
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription, MatExpansionPanelHeader,
    NgForOf,
  ],
  templateUrl: './chest.component.html',
  styleUrl: './chest.component.css'
})
export class ChestComponent {
  items: Item[] = [];

  constructor() {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    fetch('http://localhost:8080/chest')
      .then(response => response.json())
      .then((data: Item[]) => {
        this.items = data;
      })
      .catch(err => {
        console.error('Failed to load data:', err);
      });
  }

}
