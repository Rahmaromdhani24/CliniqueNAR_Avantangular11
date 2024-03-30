import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendevousComponent } from './rendevous.component';

describe('RendevousComponent', () => {
  let component: RendevousComponent;
  let fixture: ComponentFixture<RendevousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RendevousComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RendevousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
