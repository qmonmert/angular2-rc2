import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <h2>Activity detail component</h2>
  `
})
export class ActivityDetailComponent {
  
  constructor(private router: Router, private route: ActivatedRoute) {}
  
}
