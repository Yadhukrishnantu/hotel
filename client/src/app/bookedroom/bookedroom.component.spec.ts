import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedroomComponent } from './bookedroom.component';

describe('BookedroomComponent', () => {
  let component: BookedroomComponent;
  let fixture: ComponentFixture<BookedroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
