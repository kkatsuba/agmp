import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationComponent } from './authorization.component';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from '../../redux/app.reducer';

describe('AuthorizationComponent', () => {
  let component: AuthorizationComponent;
  let fixture: ComponentFixture<AuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationComponent ],
      providers: [
        { provide: AuthorizationService, useValue: jasmine.createSpy('AuthorizationService', AuthorizationService) },
      ],
      imports: [
        StoreModule.forRoot(rootReducer, {
          initialState: {
            auth: {
              email: 'login',
              validated: true
            }
          }
        })
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
