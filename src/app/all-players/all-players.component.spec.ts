import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlayersComponent } from './all-players.component';

import {HttpClientTestingModule} from '@angular/common/http/testing';

fdescribe('AllPlayersComponent', () => {
  let component: AllPlayersComponent;
  let fixture: ComponentFixture<AllPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPlayersComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get players', () => {
    expect(component.getPlayers).toBeTruthy(component.getPlayers);
  });
});
