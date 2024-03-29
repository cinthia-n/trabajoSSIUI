
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTableComponent } from './date-table.component';

describe('DateTableComponent', () => {
  let component: DateTableComponent;
  let fixture: ComponentFixture<DateTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
