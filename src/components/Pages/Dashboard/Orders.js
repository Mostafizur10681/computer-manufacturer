import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/placeorder?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user])

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((a, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{a.placeOrderProductName}</td>
                                    <td>{a.placeOrderPrice}</td>
                                    <td>{a.placeOrderQuantity}</td>
                                    <td>
                                        <button class="btn bg-green-500 btn-xs">Payment</button>
                                    </td>
                                    <td>
                                        <button class="btn bg-red-500 btn-xs">Delete</button>
                                    </td>

                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;