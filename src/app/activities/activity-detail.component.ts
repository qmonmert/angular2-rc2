import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <h4>Activity :</h4>
    ...
  `
})
export class ActivityDetailComponent {
  
  constructor(private router: Router, private route: ActivatedRoute) {}
  
}
