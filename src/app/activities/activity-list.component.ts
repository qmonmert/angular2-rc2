import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <h4>Activities</h4>
    No activities
  `
})
export class ActivityListComponent {
  
  constructor(private router: Router, private route: ActivatedRoute) {}
  
}
