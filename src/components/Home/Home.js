import React from 'react';
import './Home.css'



const Home = ({image}) => {

    return (
        <div className='home-page'>
            <div className='image'>
                <img src={image} alt="" />
            </div>
            <div className='text-area'>
                <h3 className='next'>Your Next Laptop </h3>
                <h3 className='best'>Your Best Laptop</h3>
                <p>Smile Laptop is a domestic product in Bangladesh. It’s a most innovative laptop that is introducing with some health care features too. Those health care features are Blood Pressure meter  Gloco-meter. Which are producing health care services easily  quickly with any doctors.</p>
                <button className='demo-btn'>Choice Your Laptop</button>

            </div>
            
        </div>
    );
};

export default Home;