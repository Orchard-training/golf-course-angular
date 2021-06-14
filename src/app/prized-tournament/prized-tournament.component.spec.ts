import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizedTournamentComponent } from './prized-tournament.component';

import {HttpClientTestingModule} from '@angular/common/http/testing';

fdescribe('PrizedTournamentComponent', () => {
  let component: PrizedTournamentComponent;
  let fixture: ComponentFixture<PrizedTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrizedTournamentComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizedTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get prized tournaments', () => {
    expect(component.getPrizedTournaments).toBeTruthy(component.getPrizedTournaments);
  });
});
