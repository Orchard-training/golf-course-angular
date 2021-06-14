import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlayersInTournamentComponent } from './all-players-in-tournament.component';

import {HttpClientTestingModule} from '@angular/common/http/testing';

fdescribe('AllPlayersInTournamentComponent', () => {
  let component: AllPlayersInTournamentComponent;
  let fixture: ComponentFixture<AllPlayersInTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPlayersInTournamentComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPlayersInTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should list players and tournament', () => {
    expect(component.playerInTournament).toBeTruthy(component.playerInTournament);
  });
});
