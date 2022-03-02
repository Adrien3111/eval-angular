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

export class Genres {
  id!: number;
  name!: string;
}
