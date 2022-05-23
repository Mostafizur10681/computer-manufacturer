import React from 'react';
import ryans from '../../../assets/ryans.png';
import star from '../../../assets/star.png';
import mart from '../../../assets/mart.png';
import walton from '../../../assets/walton.png';
import { faArrowRight, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OurClient = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='w-1/2'>
                    <h1 className='text-4xl font-bold text-center uppercase text-blue-900'>Our Clients</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                        <img width='190px' height='150px' src={walton} alt="" />
                        <img width='190px' height='150px' src={star} alt="" />
                        <img className='mt-8' width='300px' height='150px' src={ryans} alt="" />
                        <img width='190px' height='150px' src={mart} alt="" />
                    </div>
                </div>
                <div className='w-1/2'>
                    <h1 class="text-4xl font-bold  uppercase text-blue-900">About Us</h1>
                    <p class="py-6 text-lg">MANUFACTURER Computer & FITTINGS INDUSTRIES is an well established company manufacturing parts, we also manufacture special steel computer parts like Motherboard, SSD, HDD, keyboard etc.</p>
                    <button class="btn bg-blue-900">Learn More <FontAwesomeIcon className='text-white text-2xl pl-2' icon={faArrowRight}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>

    );
};

export default OurClient;