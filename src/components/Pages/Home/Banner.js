import React from 'react';
import banner from '../../../assets/banner.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold uppercase">Manufactured Computer <span className='text-blue-900'>Parts!</span></h1>
                    <p class="py-6 text-lg">All of the computer parts are available here. We manufacturing all kind of computer elemenets like
                        motherboard, cpu, ram, storage, keyboard, mouse etc. To get all of computer parts
                        stay connect with us.
                    </p>
                    <button class="btn bg-blue-900">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;