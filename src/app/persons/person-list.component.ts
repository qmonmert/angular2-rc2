import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from './person';
import { PERSONS } from './persons';

@Component({
  template: `
    <h4>Persons :</h4>
    <ul>
      <li *ngFor="let person of persons">
        {{person.firstname}} {{person.name}} <button type='button' class='btn btn-info btn-xs' (click)="onSelect(person)">Detail</button>
      </li>
    </ul>
  `
})
export class PersonListComponent {

  persons: Person[] = PERSONS;
  
  constructor(private router: Router, private route: ActivatedRoute) {}
  
  onSelect(person: Person) {
    this.router.navigate(['/person', person.id]);
  }

}
