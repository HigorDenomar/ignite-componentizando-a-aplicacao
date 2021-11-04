import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  const [movies, setMovies] = useState<Movie[]>([]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        genres={genres}
        setGenres={setGenres}
        selectedGenreId={selectedGenreId}
        handleClickButton={handleClickButton}
      />

      <Content
        movies={movies}
        setMovies={setMovies}
        selectedGenre={selectedGenre}
        selectedGenreId={selectedGenreId}
        setSelectedGenre={setSelectedGenre}
      />
    </div>
  )
}
