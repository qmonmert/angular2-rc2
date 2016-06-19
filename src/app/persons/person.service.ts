import { Injectable } from '@angular/core';
import { PERSONS } from './persons';

let personsPromise = Promise.resolve(PERSONS);

@Injectable()
export class PersonService {

    getPersons() { 
        return personsPromise;
    }

    getPerson(id: number | string) {
        return personsPromise.then(persons => persons.filter(h => h.id === +id)[0]);
    }

}