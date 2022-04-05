import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            {/* <h1> Question And Answers </h1> */}
            <div className='ans-container'>
                <div className='ans-div'>
                    <h2> What is Context API ? </h2>
                    <p> The Context API is a React structure. It enables us to exchange unique details and assists in solving prop-drilling from all levels of our application. As with most component-based frontend frameworks, passing some form of data from one component to another is usually a real need. Typically it comes in the form of passing data from a parent to a child component or even child to parent components. This leads to components having data they don’t actually need, but they need to pass on down the tree. </p>
                </div>
                <div className='ans-div'>
                    <h2> What is Semantic Tag ?  </h2>
                    <p>Semantic tags provide information about the contents of those tags that goes beyond just how they look on a page.Semantic tags clearly define the purpose of the HTML element. It also describes the type of content that the element should contain.A semantic element clearly describes its meaning to both the browser and the developer. Examples of non-semantic elements: div and span - Tells nothing about its content. Examples of semantic elements: form , table , and article - Clearly defines its content.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;