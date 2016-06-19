import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <h2>Person detail component</h2>
  `
})
export class PersonDetailComponent {
  
  constructor(private router: Router, private route: ActivatedRoute) {}
  
}
