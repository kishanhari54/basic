import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basics';

  constructor(
    private route: Router
  ) { }

  navigateBack(): void {
    this.route.navigate(['/products']);
  }
}
