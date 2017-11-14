import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileComponentComponent } from './user-profile-component.component';

describe('UserProfileComponentComponent', () => {
  let component: UserProfileComponentComponent;
  let fixture: ComponentFixture<UserProfileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
