import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Order = ({ a, index }) => {

    // const handledelete = id => {
    //     fetch(`https://still-thicket-10421.herokuapp.com/placeorder/${_id}`, {
    //         method: "DELETE",
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //         },
    //     })

    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             if (data.deletedCount) {
    //                 toast.success("Deleted");

    //             }
    //         });
    // }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{a.placeOrderProductName}</td>
            <td>{a.placeOrderPrice}</td>
            <td>{a.placeOrderQuantity}</td>
            <td>
                {a.placeOrderPrice && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                        <button className="btn btn-xs btn-secondary lg:px-5">
                            Pay
                        </button>
                    </Link>
                )}
                {a.paid && <span class="btn text-seccess">Paid</span>}
            </td>
            <td>
                <button class="btn bg-red-500 btn-xs">Delete</button>
            </td>

        </tr>
    );
};

export default Order;