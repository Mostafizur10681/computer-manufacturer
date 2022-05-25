import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth);

    console.log(orders)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/placeorder?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))

        }
    }, [])


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
                            orders.map(a =>
                                <tr>
                                    <th></th>
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