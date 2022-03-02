import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import {Movie, MovieDetails, Genres} from './types';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MovieService {

  serverUrlMovies = 'https://movie-api.benoithubert.me/movies';
  serverUrlGenres = 'https://movie-api.benoithubert.me/genres';

  constructor(
    private http: HttpClient
  ) {}

  getAllMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(
        `${this.serverUrlMovies}`
      )
  }

  getMovie(movieId: number): Observable<MovieDetails> {
    return this.http
      .get<MovieDetails>(
        `${this.serverUrlMovies}/${movieId}`
      )
  }

  getAllGenres(): Observable<Genres[]> {
    return this.http
      .get<Genres[]>(
        `${this.serverUrlGenres}`
      )
  }

  getMoviesByGenre(genreId: number): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(
        `${this.serverUrlMovies}?genre_id=${genreId}`
      )
  }

}
