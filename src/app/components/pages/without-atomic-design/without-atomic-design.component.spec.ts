import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutAtomicDesignComponent } from './without-atomic-design.component';

describe('WithoutAtomicDesignComponent', () => {
  let component: WithoutAtomicDesignComponent;
  let fixture: ComponentFixture<WithoutAtomicDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutAtomicDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutAtomicDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
