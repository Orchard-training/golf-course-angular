import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TournamentServiceService } from '../tournament-service.service';

@Component({
  selector: 'app-update-prize',
  templateUrl: './update-prize.component.html',
  styleUrls: ['./update-prize.component.css']
})
export class UpdatePrizeComponent implements OnInit {

  tournamentForm = new FormGroup({
    tourId: new FormControl(null, Validators.required),
    prize: new FormControl()
  });

  error: boolean;

  constructor(private tournamentService: TournamentServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(formData) {
    this.error = false;
    let data = new FormGroup({
      prize: new FormControl(formData.prize)
    });

    this.tournamentService.update(formData.tourId, data.value).subscribe(
      (result) => {
        this.tournamentForm.reset();
        this.router.navigate(['/tournaments/prize']);
      },
      (error) => {
        console.error(error.error);
        this.error = true;
      }
    );
  }

}
