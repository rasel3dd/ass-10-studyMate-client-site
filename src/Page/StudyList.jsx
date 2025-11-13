import React, { use } from 'react';
import StudyCard from '../Component/StudyCard';

const StudyList = ({partnerListPromise}) => {
    const partners = use(partnerListPromise);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 space-y-4'>
            {
            partners.map(partner => <StudyCard key={partner._id} partner={partner}></StudyCard>)
            }
        </div>
    );
};

export default StudyList;