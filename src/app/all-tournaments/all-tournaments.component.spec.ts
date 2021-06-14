import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTournamentsComponent } from './all-tournaments.component';

import{HttpClientTestingModule} from '@angular/common/http/testing';

fdescribe('AllTournamentsComponent', () => {
  let component: AllTournamentsComponent;
  let fixture: ComponentFixture<AllTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTournamentsComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get list of tournaments', () => {
    expect(component.getTournaments).toBeTruthy(component.getTournaments);
  });
});
