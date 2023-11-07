import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersconnectedComponent } from './usersconnected.component';

describe('UsersconnectedComponent', () => {
  let component: UsersconnectedComponent;
  let fixture: ComponentFixture<UsersconnectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersconnectedComponent]
    });
    fixture = TestBed.createComponent(UsersconnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
