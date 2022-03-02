import { Component, OnInit } from '@angular/core';
import {MovieService} from "../movie.service";
import {Movie} from "../types";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    if (id){
      this.movieService.getMoviesByGenre(id)
        .subscribe(movies => {
          this.movies = movies;
        });
    }
    else {
      this.movieService.getAllMovies()
        .subscribe(movies => {
          this.movies = movies;
        });
    }

  }

}
