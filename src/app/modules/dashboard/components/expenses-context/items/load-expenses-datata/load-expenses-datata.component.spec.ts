import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadExpensesDatataComponent } from './load-expenses-datata.component';

describe('LoadExpensesDatataComponent', () => {
  let component: LoadExpensesDatataComponent;
  let fixture: ComponentFixture<LoadExpensesDatataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadExpensesDatataComponent]
    });
    fixture = TestBed.createComponent(LoadExpensesDatataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
