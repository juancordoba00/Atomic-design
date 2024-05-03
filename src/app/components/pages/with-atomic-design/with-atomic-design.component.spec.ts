import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithAtomicDesignComponent } from './with-atomic-design.component';

describe('WithAtomicDesignComponent', () => {
  let component: WithAtomicDesignComponent;
  let fixture: ComponentFixture<WithAtomicDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithAtomicDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithAtomicDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
