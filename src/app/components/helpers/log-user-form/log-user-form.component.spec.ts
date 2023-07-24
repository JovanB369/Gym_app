import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogUserFormComponent } from './log-user-form.component';

describe('LogUserFormComponent', () => {
  let component: LogUserFormComponent;
  let fixture: ComponentFixture<LogUserFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogUserFormComponent]
    });
    fixture = TestBed.createComponent(LogUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
