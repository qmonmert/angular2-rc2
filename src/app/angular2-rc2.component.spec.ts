import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2Rc2AppComponent } from '../app/angular2-rc2.component';

beforeEachProviders(() => [Angular2Rc2AppComponent]);

describe('App: Angular2Rc2', () => {
  it('should create the app',
      inject([Angular2Rc2AppComponent], (app: Angular2Rc2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-rc2 works!\'',
      inject([Angular2Rc2AppComponent], (app: Angular2Rc2AppComponent) => {
    expect(app.title).toEqual('angular2-rc2 works!');
  }));
});
