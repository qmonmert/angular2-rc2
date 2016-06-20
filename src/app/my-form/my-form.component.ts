import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-my-form',
  templateUrl: 'my-form.component.html'
})
export class MyFormComponent {

  public user: User = {
    name: 'John',
    address: {
      address1: '11, High Street',
      postcode: '1234'
    }
  }
  
  public save(form: User, isValid: boolean) {
    console.log(form, isValid);
  }

}

export interface User {
  name: string;
  address?: {
    address1?: string;
    postcode?: string;
  }
}
