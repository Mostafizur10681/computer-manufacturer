import { faArrowsDownToLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AboutMe = () => {
    return (
        <div className='mt-12 px-12'>
            <h1 className='text-center font-bold mb-12 text-5xl uppercase'>About <span className='text-blue-900'>Me</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <h2 className=' font-bold mb-3 text-3xl uppercase'>Personal Infromation</h2>
                    <h4>Name: <span className='font-bold mb-2'>Md.Mostafizur Rahman</span></h4>
                    <h4>Email: <span className='font-bold mb-2'>sourav10681@gmail.com</span></h4>
                    <p>phone: <span className='font-bold mb-2'>(+88)01644823123</span></p>
                    <p>Address: <span className='font-bold mb-2'>Dhaka,Bangladesh</span></p>
                    <p>Linkdin: <span className='font-bold mb-2'>https://www.linkedin.com/in/md-mostafizur-rahman/</span></p>
                    <p>Github: <span className='font-bold mb-2'>https://github.com/Mostafizur10681</span></p>
                    <p>Facebook: <span className='font-bold mb-2'>https://www.facebook.com/profile.php?id=100010110405257</span></p>


                    <button class="btn mt-5 mb-5 bg-blue-900">Download CV <FontAwesomeIcon className='text-white text-2xl pl-2' icon={faArrowsDownToLine}></FontAwesomeIcon></button>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    <div class="card w-64 bg-black  shadow-2xl">
                        <div class="card-body">
                            <h2 class="card-title text-6xl text-white">1+</h2>
                            <p className='text-white text-xl'>Year of Experiance</p>
                        </div>
                    </div>
                    <div class="card w-64 bg-black shadow-2xl">
                        <div class="card-body">
                            <h2 class="card-title text-6xl text-white">12+</h2>
                            <p className='text-white text-xl'>Completed Project</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;