import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import OurClient from './OurClient';
import Parts from './Parts';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Reviews></Reviews>
            <OurClient></OurClient>
        </div>
    );
};

export default Home;