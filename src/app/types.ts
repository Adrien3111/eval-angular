export class Movie {
  id!: number;
  title!: string;
  poster_path!: string;
  overview!: string;

  constructor() {
  }
}

export class MovieDetails {
  id!: number;
  title!: string;
  poster_path!: string;
  overview!: string;
  tagline!: string;
  vote_average!: string;
  runtime!: number;
  spoken_languages!: Language[];
  release_date!: Date;
  genres!: Genre[];
  production_companies!: Compagnies[];

  constructor() {
  }
}

interface Language {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface Genre {
  id: number,
  name: string
}

interface Compagnies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export class Genres {
  id!: number;
  name!: string;
}
