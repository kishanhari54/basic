import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  randomData: string;
  constructor() { }

  ngOnInit(): void {
    this.randomData = 'RANDOM';
  }

}
