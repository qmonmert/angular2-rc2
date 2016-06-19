import { Component } from '@angular/core';
import { MyAnimationComponent } from './my-animation/my-animation.component';

@Component({
  moduleId: module.id,
  selector: 'angular2-rc2-app',
  template: `
    <my-animation></my-animation>
  `,
  directives: [MyAnimationComponent]
})
export class Angular2Rc2AppComponent {}
