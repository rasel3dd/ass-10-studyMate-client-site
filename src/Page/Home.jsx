import React from 'react';
import StudyList from './StudyList';

const partnerListPromise = fetch('http://localhost:5000/partner-List').
then(res => res.json());
const Home = () => {
    return (
        <div>
           <StudyList partnerListPromise = {partnerListPromise}></StudyList>
        </div>
    );
};

export default Home;