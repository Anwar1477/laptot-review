import React from "react";
import { Link } from "react-router-dom";
import useReview from "../../hook/hook";
import Review from "../Review/Review";
import "./Home.css";

const Home = ({ image }) => {
  let [reviews, setReviews] = useReview();
  let { name, id, rating, comment, picture } = reviews;
  const rest = reviews.slice(0, 3);
  let length = rest.length;
  console.log(rest);

  return (
    <div>
      <div className="home-page">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="text-area">
          <h3 className="next">Your Next Laptop </h3>
          <h3 className="best">Your Best Laptop</h3>
          <p>
            Smile Laptop is a domestic product in Bangladesh. It’s a most
            innovative laptop that is introducing with some health care features
            too. Those health care features are Blood Pressure meter
            Gloco-meter. Which are producing health care services easily quickly
            with any doctors.
          </p>
          <button className="demo-btn">Choice Your Laptop</button>
        </div>
      </div>
      <h1 style={{textAlign:'center', color:'tomato'}}>Review Length: {length}</h1>
      <div className='reviews-container-area'>

        {rest.map((review) => (
          <div className="per-review">
            {
              <div className='review-container'>
                <img src={review.picture} alt="" />
                <div>
                  <h2>{review.name}</h2>
                  <p> Comments:- {review.comment} </p>
                  <p className="ratting"> Ratting: {review.rating} </p>
                </div>
              </div>
            }
          </div>
        ))}
        
      </div>
      <div className="button-area">
          <Link to="/review">
            <button className="review-btn"> See all Reviews </button>
          </Link>
        </div>
    </div>
  );
};

export default Home;
