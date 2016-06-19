import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from './person.service';
import { Person } from './person';

@Component({
  template: `
    <h4>Person detail :</h4>
    <div *ngIf="person">
      <ul>
        <li>Name : {{person.name}}</li>
        <li>Firstname : {{person.firstname}}</li>
        <li>Age : {{person.age}}</li>
      </ul>
    </div>
    <div *ngIf="!person">
      Unknown person
    </div>
    <div>
      <button (click)="goToPersons()">Back on persons</button>
    </div>
  `
})
export class PersonDetailComponent implements OnInit, OnDestroy {

  person: Person;
  sub: any;
  
  constructor(private router: Router, private route: ActivatedRoute, private personService: PersonService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        let id = +params['id'];
        this.personService.getPerson(id).then(person => this.person = person);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goToPersons() {
    this.router.navigate(['/persons']);
  }
  
}
