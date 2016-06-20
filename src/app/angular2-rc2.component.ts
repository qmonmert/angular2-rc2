import { Component } from '@angular/core';
import { MyAnimationComponent } from './my-animation/my-animation.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { PersonService } from './persons/person.service'

@Component({
  moduleId: module.id,
  selector: 'angular2-rc2-app',
  template: `
    <h1>1 - Router</h1>
    <div style="border:2px solid gray;height:200px;width:350px;padding:10px;margin-left:10px;">
      <nav>
        <a [routerLink]="['/activities']">Activities</a>
        <a [routerLink]="['/persons']">Persons</a>
      </nav>
      <router-outlet></router-outlet>
    </div>  

    <my-animation></my-animation>

    <app-my-form></app-my-form>
  `,
  directives: [MyAnimationComponent, MyFormComponent, ROUTER_DIRECTIVES],
  providers: [PersonService]
})
export class Angular2Rc2AppComponent {}
