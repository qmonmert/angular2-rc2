import { Component, Input, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-animation',
  template: `
    <h1>2 - Animations</h1>
    <div id='config'>
      <button class='btn btn-primary' [disabled]='!canBgColorRed' (click)='setRed()'>Red</button>
      <button class='btn btn-primary' [disabled]='canBgColorRed'  (click)='setBlue()'>Blue</button>
      <button class='btn btn-primary' [disabled]='!canZoomIn'     (click)='zoomIn()'>Zoom In</button>
      <button class='btn btn-primary' [disabled]='canZoomIn'      (click)='zoomOut()'>Zoom Out</button>
      <button class='btn btn-primary' [disabled]='!canFlyIn'      (click)='flyIn()'>Fly In</button>
      <button class='btn btn-primary' [disabled]='canFlyIn'       (click)='flyOut()'>Fly Out</button>
    </div>
    <div id='box' @bgColorTrigger='bgcolor' @zoomTrigger='zoom' @flyTrigger='fly'></div>
  `,
  styleUrls: ['my-animation.component.css'],
  animations: [

    trigger('bgColorTrigger', [
      state('red', style({
        backgroundColor: 'red'
      })),
      state('blue', style({
        backgroundColor: 'blue'
      })),
      transition('red => blue', animate('700ms ease-in')),
      transition('blue => red', animate('700ms ease-out'))
    ]),

    trigger('zoomTrigger', [
      state('zoomIn', style({
        transform: 'scale(1.3)'
      })),
      transition('zoomOut => zoomIn', [
        style({
          border: '5px solid green'
        }),
        animate('1800ms ease-in')
      ])
    ]),

    trigger('flyTrigger', [
      transition('active => inactive', [
        style({transform: 'translateX(-100%)'}),
        animate(1000)
      ]),
      transition('inactive => active', [
        style({transform: 'translateX(100%)'}),
        animate(1000)
      ])
    ])

  ]
})
export class MyAnimationComponent {

  bgcolor = 'blue';
  canBgColorRed = true;
  zoom = 'zoomOut';
  canZoomIn = true;
  fly = 'inactive';
  canFlyIn = true;

  setBlue() {
    this.bgcolor = 'blue';
    this.canBgColorRed = true;
  }

  setRed() {
    this.bgcolor = 'red';
    this.canBgColorRed = false;
  }

  zoomIn() {
    this.zoom = 'zoomIn';
    this.canZoomIn = false;
  }

  zoomOut() {
    this.zoom = 'zoomOut';
    this.canZoomIn = true;
  }

  flyIn() {
    this.fly = 'active';
    this.canFlyIn = false;
  }

  flyOut() {
    this.fly = 'inactive';
    this.canFlyIn = true;
  }

}
