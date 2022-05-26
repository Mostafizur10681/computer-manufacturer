import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const stripePromise = loadStripe('pk_test_51L2CrGG9oj2pDETbtrBQIEhVG4PSy9NHzqFCso9sJwDG3zSVPaVuOljBT2B80z21VAHRf26XqMtFXMIlsMWv8p4j00mJ6tNzAa');
const Payment = ({ a }) => {
    const { id } = useParams()
    const url = `http://localhost:5000/placeorder/${id}`

    const { data: orders, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Your Ordered Product, {orders.placeOrderProductName}</p>

                    <p>Please pay: ${orders.placeOrderPrice}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    {/* <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements> */}
                </div>
            </div>
        </div>
    );
};

export default Payment;