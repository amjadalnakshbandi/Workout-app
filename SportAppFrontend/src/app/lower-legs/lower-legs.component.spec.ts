import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerLegsComponent } from './lower-legs.component';

describe('LowerLegsComponent', () => {
  let component: LowerLegsComponent;
  let fixture: ComponentFixture<LowerLegsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowerLegsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowerLegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
