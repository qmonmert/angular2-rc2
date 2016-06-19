import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <h2>Person list component</h2>
  `
})
export class PersonListComponent {
  
  constructor(private router: Router, private route: ActivatedRoute) {}
  
}
