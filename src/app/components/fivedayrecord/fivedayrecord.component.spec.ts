import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivedayrecordComponent } from './fivedayrecord.component';

describe('FivedayrecordComponent', () => {
  let component: FivedayrecordComponent;
  let fixture: ComponentFixture<FivedayrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FivedayrecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FivedayrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
