import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminDigitalComponent } from './login-admin-digital.component';

describe('LoginAdminDigitalComponent', () => {
  let component: LoginAdminDigitalComponent;
  let fixture: ComponentFixture<LoginAdminDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginAdminDigitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginAdminDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
