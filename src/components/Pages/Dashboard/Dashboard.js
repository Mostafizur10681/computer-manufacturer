import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer  drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-4xl font-bold uppercas mb-4 text-blue-900'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><button className='btn bg-blue-900 mb-3 text-white'><Link to="/dashboard">My Orders</Link></button></li>
                    <li><button className='btn bg-blue-900 mb-3 text-white'><Link to="/dashboard/addreview">Add a Review</Link></button></li>
                    <li><button className='btn bg-blue-900 mb-3 text-white'><Link to="/dashboard/myprofile">My Profile</Link></button></li>
                    {admin && <li><button className='btn bg-blue-900 mb-3 text-white'><Link to="/dashboard/users">All Users</Link></button></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;