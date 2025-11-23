import React, { use } from 'react';
import FinePartnerCard from './FinePartnerCard';

const findPartnerPromise = fetch('http://localhost:5000/partner').then(res => res.json());

const FIndPartner = () => {
    const partners = use(findPartnerPromise);
    
    return (
      <div>
        <h1 className='text-center text-3xl font-bold pt-6'>Our All Partners Here</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto py-8'>
      {partners.map(partner => (
        <FinePartnerCard
          key={partner.id}
          partner={partner}   
        ></FinePartnerCard>
      ))}
    </div>
      </div>
    );
};

export default FIndPartner;