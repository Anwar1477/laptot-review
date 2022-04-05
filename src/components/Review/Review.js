import React from 'react';
import useReview from '../../hook/hook';
import './Review.css'

const Review = () => {
  
    let [reviews, setReviews] = useReview();
    let { name, id, rating, comment, picture } = reviews;
    return (
        <div>
            <h1 style={{textAlign:'center',color:'tomato'}}>Review Length: {reviews.length}</h1>
            <div className='reviews-container-area'>
                {
                    reviews.map(review => <div key={review.id} className='per-review'>
                        <div className='review-container'>
                            <div>
                                <img src={review.picture} alt="" />
                            </div>
                            <div>
                                <h2>{review.name}</h2>
                                <p> <span style={{fontSize:'20px',color:'black', fontWeight:'bold'}}>Comments:-</span> {review.comment} </p>
                                <p className='ratting'><span style={{fontSize:'20px',color:'black', fontWeight:'bold'}}>Rating:-</span> {review.rating} </p> 
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;