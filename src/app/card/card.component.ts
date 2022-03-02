import { Component, OnInit } from '@angular/core';
import {MovieService} from "../movie.service";
import {MovieDetails} from "../types";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  movieDetails?: MovieDetails;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id)
      .subscribe(movieDetails => {
          this.movieDetails = movieDetails;
      });
  }

}
