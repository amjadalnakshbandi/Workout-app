import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerArmsComponent } from './lower-arms.component';

describe('LowerArmsComponent', () => {
  let component: LowerArmsComponent;
  let fixture: ComponentFixture<LowerArmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowerArmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowerArmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
