import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [MaterialModule, FormsModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('hz', fakeAsync(() => {
    spyOn(component.filterChange, 'emit');
    fixture.detectChanges();

    const searchInput = fixture.debugElement.query(By.css('input'));
    searchInput.triggerEventHandler('keyup', {
      target: { value: 'aaaa' }
    });

    tick(300);
    expect(component.filterChange.emit).toHaveBeenCalledWith('aaaa');
  }));

});
