import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePrizeComponent } from './update-prize.component';

describe('UpdatePrizeComponent', () => {
  let component: UpdatePrizeComponent;
  let fixture: ComponentFixture<UpdatePrizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePrizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePrizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
