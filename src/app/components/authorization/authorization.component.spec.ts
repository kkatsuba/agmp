import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationComponent } from './authorization.component';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';

describe('AuthorizationComponent', () => {
  const login = new Subject<string>();
  let component: AuthorizationComponent;
  let fixture: ComponentFixture<AuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationComponent ],
      providers: [
        { provide: AuthorizationService, useValue: jasmine.createSpy('AuthorizationService', AuthorizationService) },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationComponent);
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
