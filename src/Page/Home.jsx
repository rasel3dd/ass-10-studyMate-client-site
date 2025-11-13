import React from 'react';
import StudyList from './StudyList';
import HeroSection from './HeroSection';

const partnerListPromise = fetch('http://localhost:5000/partner-List').then(res => res.json());
const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
           <StudyList partnerListPromise = {partnerListPromise}></StudyList>
        </div>
    );
};

export default Home;