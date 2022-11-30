import { useState } from 'react';
import { useEffect } from 'react';
import { getMovieReviews } from 'themoviedbAPI';
const { useParams } = require('react-router-dom');

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    const getCredits = async () => {
      const fetchResult = await getMovieReviews(id);
      setReviews(fetchResult);
    };
    getCredits();
  }, [id]);

  if (reviews) {
    if(reviews.results.length){
    return (    
      <ul>
        {reviews.results.map(review => {
          return (
            <li key={review.id} >
              <p><b>{review.author}</b></p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    );
  }}
  return <p>We don't have any reviews for this movie</p>
};

export default Reviews