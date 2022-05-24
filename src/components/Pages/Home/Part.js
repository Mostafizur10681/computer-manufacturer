import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, img, description, minimum, quantity, price } = part;
    const navigate = useNavigate()

    const handleParts = id => {
        navigate(`/part/${id}`)
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img width='450px' height='300px' src={img} alt={img} class="rounded-xl" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-blue-900 uppercase">{name}</h2>
                <p>{description}</p>
                <p><small>Mimimum Order: {minimum}</small></p>
                <p><small>Quantity: {quantity}</small></p>
                <p>Price: <span className='text-yellow-500'>${price}</span></p>
                <div class="card-actions justify-end">
                    <button onClick={() => handleParts(_id)} class="btn bg-blue-900">place order</button>
                </div>
            </div>
        </div>
    );
};

export default Part;