import { Component } from '@angular/core';
import { MyAnimationComponent } from './my-animation/my-animation.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'angular2-rc2-app',
  template: `
    <h1>Router</h1>
    <nav>
      <a [routerLink]="['/activities']">Activities</a>
      <a [routerLink]="['/persons']">Persons</a>
    </nav>
    <router-outlet></router-outlet>
    
    <my-animation></my-animation>
  `,
  directives: [MyAnimationComponent, ROUTER_DIRECTIVES]
})
export class Angular2Rc2AppComponent {}
