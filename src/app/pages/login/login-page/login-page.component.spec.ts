import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { MaterialModule } from '../../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorizationService } from '../../../services/authorization/authorization.service';
import { Store } from '@ngrx/store';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      imports: [MaterialModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers: [
        { provide: AuthorizationService, useValue: jasmine.createSpyObj('AuthorizationService', ['signIn']) },
        { provide: Store, useValue: jasmine.createSpyObj('Store', ['select']) }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
