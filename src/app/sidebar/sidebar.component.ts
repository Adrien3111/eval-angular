import { Component, OnInit } from '@angular/core';
import {MovieService} from "../movie.service";
import {Genres} from "../types";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  genres: Genres[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAllGenres()
      .subscribe(genres => {
        this.genres = genres;
      });
  }

}
