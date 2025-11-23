import React from 'react';
import StudyList from './StudyList';
import HeroSection from './HeroSection';
import HowWork from '../Component/HowWork';
import Reviews from '../Component/Reviews';

const partnerListPromise = fetch('http://localhost:5000/topList').then(res => res.json());
const Home = () => {
    return (
        <div>
            
            <HeroSection></HeroSection>
           <StudyList partnerListPromise = {partnerListPromise}></StudyList>
           <HowWork></HowWork>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;