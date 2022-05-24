import React from 'react';
import AboutMe from './AboutMe';
import Education from './Education';
import MyProjects from './MyProjects';
import MySkills from './MySkills';
import ProtfolioBanner from './ProtfolioBanner';

const MyProtfolio = () => {
    return (
        <div>
            <ProtfolioBanner></ProtfolioBanner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <Education></Education>
            <MyProjects></MyProjects>
        </div>
    );
};

export default MyProtfolio;