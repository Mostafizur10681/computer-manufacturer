import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('user.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mb-24 px-12'>
            <p className='font-bold text-center text-xl uppercase text-blue-900'>Testimonials</p>
            <h2 className='text-5xl font-bold text-center mb-12 uppercase'>What our Clients say About us</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    reviews.map(CustomerReview => <Review
                        key={CustomerReview._id}
                        CustomerReview={CustomerReview}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;