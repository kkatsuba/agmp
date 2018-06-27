import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationComponent } from './authorization.component';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { AppStore } from '../../redux/app.store';
import { By } from '@angular/platform-browser';

class MockStore {
  state = {
    auth: {
      email: 'some@email.com'
    }
  };

  subscribe(callback) {
    callback();
  }

  getState() {
    return this.state;
  }
}

describe('AuthorizationComponent', () => {
  let component: AuthorizationComponent;
  let fixture: ComponentFixture<AuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationComponent ],
      providers: [
        { provide: AuthorizationService, useValue: jasmine.createSpy('AuthorizationService', AuthorizationService) },
        { provide: AppStore, useClass: MockStore }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('trigger logOff event handler', () => {
    const logOffButton = fixture.debugElement.query(By.css('.log-off'));
    logOffButton.triggerEventHandler('click', null);
  });
});
