import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActionsComponent } from './user-actions.component';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';

describe('UserActionsComponent', () => {
  const login = new Subject<string>();
  let component: UserActionsComponent;
  let fixture: ComponentFixture<UserActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserActionsComponent ],
      providers: [
        { provide: AuthorizationService, useValue: jasmine.createSpy('AuthorizationService', AuthorizationService) },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActionsComponent);
    component = fixture.componentInstance;

    login.next('login');
    component.login = login.asObservable();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('trigger logOff event handler', () => {
    component.login.subscribe(() => {
      const logOffButton = fixture.debugElement.query(By.css('.log-off'));
      logOffButton.triggerEventHandler('click', null);
    });
  });
});
