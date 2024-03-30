import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminDigitalComponent } from './home-admin-digital.component';

describe('HomeAdminDigitalComponent', () => {
  let component: HomeAdminDigitalComponent;
  let fixture: ComponentFixture<HomeAdminDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeAdminDigitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeAdminDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
