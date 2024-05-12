import {Component, OnInit} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
}

@Component({
  selector: 'app-back',
  standalone: true,
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    NgForOf, BrowserAnimationsModule
  ],
  templateUrl: './back.component.html',
  styleUrl: './back.component.css'
})
export class BackComponent implements OnInit {
  title = 'SportAppFrontend';
  items: Item[] = [];

  constructor() {
  }

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

