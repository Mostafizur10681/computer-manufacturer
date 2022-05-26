import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = ({ CustomerReview }) => {
    const { img, name, review, ratings } = CustomerReview;
    const intRating = parseInt(ratings)
    let n = intRating;
    return (
        <div class="card w-96 bg-base-100 mb-8 shadow-2xl">
            <div class="avatar">
                <div class="w-32 mx-auto mask mt-5 mask-hexagon">
                    <img src={img} />
                </div>
            </div>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p><small>{review}</small></p>
                <div class="rating">
                    {[...Array(n)].map((elementInArray, index) => (
                        <div className="" key={index}>  <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon></div>
                    )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Review;