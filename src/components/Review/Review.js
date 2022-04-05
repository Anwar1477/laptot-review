import React from 'react';
import useReview from '../../hook/hook';
import './Review.css'

const Review = () => {
  
    let [reviews, setReviews] = useReview();
    let { name, id, rating, comment, picture } = reviews;
    return (
        <div>
            <div className='reviews-container-area'>
                {
                    reviews.map(review => <div className='per-review'>
                        <div className='review-container'>
                            <div>
                                <img src={review.picture} alt="" />
                            </div>
                            <div>
                                <h2>{review.name}</h2>
                                <p> Comments:- {review.comment} </p>
                                <p className='ratting'> Ratting: {review.rating} </p> 
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;