import { useState } from 'react';
import { useEffect } from 'react';
import css from './Cast.module.css';
import { getMovieCredits } from 'themoviedbAPI';
const { useParams } = require('react-router-dom');


const Cast = () => {
  const { id } = useParams();
  const [credits, setCredirs] = useState();

  useEffect(() => {
    const getCredits = async () => {
      const fetchResult = await getMovieCredits(id);
      setCredirs(fetchResult);
    };
    getCredits();
  }, [id]);

  if (credits) {
    if (credits.cast.length) {
      return (
        <div className={css.addInf}>
        <ul className={css.list}>
          {credits.cast.map(cast => {
            return (
              <li key={cast.id}>
                <img
                  src={'https://image.tmdb.org/t/p/w200' + cast.profile_path}
                  alt="profile"
                />
                <p>
                  <b>{cast.name}</b>
                </p>
                <p>Character: {cast.character}</p>
              </li>
            );
          })}
        </ul>
        </div>
      );
    }
    return <p>We don't have credits for this movie</p>;
  }
};

export default Cast
