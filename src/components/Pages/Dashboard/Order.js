import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Order = ({ a, index }) => {

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{a.placeOrderProductName}</td>
            <td>{a.placeOrderPrice}</td>
            <td>{a.placeOrderQuantity}</td>
            <td>
                {a.placeOrderPrice && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                        <button className="btn btn-secondary rounded-full btn-sm text-white lg:px-5">
                            Pay
                        </button>
                    </Link>
                )}
                {a.paid && <span class="btn btn-success rounded-full btn-sm text-white">Paid</span>}
            </td>
            <td>
                <button class="btn btn-error rounded-full btn-sm text-white">Delete</button>
            </td>

        </tr>
    );
};

export default Order;