import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalComponent } from './pal.component';

describe('PalComponent', () => {
  let component: PalComponent;
  let fixture: ComponentFixture<PalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
