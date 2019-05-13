import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthNavberComponent } from './auth-navber.component';

describe('AuthNavberComponent', () => {
  let component: AuthNavberComponent;
  let fixture: ComponentFixture<AuthNavberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthNavberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthNavberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
