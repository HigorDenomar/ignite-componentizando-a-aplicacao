import { useEffect } from 'react';

import { Button } from './Button';

import { api } from '../services/api';

type Genre = {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

type Props = {
  genres: Genre[];
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
  setGenres: (genres: Genre[]) => void;
}

import '../styles/sidebar.scss';

export function SideBar({ genres, selectedGenreId, handleClickButton, setGenres }: Props) {
  useEffect(() => {
    api.get<Genre[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}