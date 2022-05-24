import React from 'react';
import carWareHouse from '../../../assets/carWareHouse.jpg';
import englishTutor from '../../../assets/EnglishTutor.jpg';
import macBook from '../../../assets/macBook.jpg';

const MyProjects = () => {
    return (
        <div className='text-center px-12 mb-24'>
            <h1 className='text-center font-bold mb-12 text-5xl uppercase'>My Best <span className='text-blue-900'>Projects</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={carWareHouse} alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <a href="https://car-warehouse-47794.web.app/" target='_blank'><button class="btn bg-blue-900">Live Site</button></a>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={englishTutor} alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <a href="https://english-tutor-react.web.app/" target='_blank'><button class="btn bg-blue-900">Live Site</button></a>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={macBook} alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <a href="https://mac-book-pro-analysis.netlify.app/" target='_blank'><button class="btn bg-blue-900">Live Site</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;