import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <h2>Activity list component</h2>
  `
})
export class ActivityListComponent {
  
  constructor(private router: Router, private route: ActivatedRoute) {}
  
}
