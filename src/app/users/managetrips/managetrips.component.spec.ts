import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetripsComponent } from './managetrips.component';

describe('ManagetripsComponent', () => {
  let component: ManagetripsComponent;
  let fixture: ComponentFixture<ManagetripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagetripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagetripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
