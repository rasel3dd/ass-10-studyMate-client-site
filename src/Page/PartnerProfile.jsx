import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FaStar } from "react-icons/fa6";


  

const PartnerProfile = () => {
    
    const { id } = useParams();
    const [partner, setPartner] = useState(null);
  const [loading, setLoading] = useState(false);
 const [added, setAdded] = useState(false);


  const handelAdd = async () => {
    if (added) return;
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/connection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(partner),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`${name} added to your connections `);
        setAdded(true);
      } else {
        alert(data.message || 'Already added!');
        setAdded(true);
      }
    } catch (error) {
      console.error('Error adding connection:', error);
      alert('Failed to add connection. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    
    fetch('http://localhost:5000/partner-List')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        setPartner(found);
      });
  }, [id]);
  if (!partner) {
    return <p className='text-center py-10 text-gray-500'>Loading profile...</p>;
  }
   const { name, profileimage, subject, rating, experienceLevel, availabilityTime, studyMode } = partner;
    return (
        <div>
            <div className='w-11/12 mx-auto py-10 flex justify-center'>
  <div className='bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-4xl border border-gray-100 hover:shadow-2xl transition-all duration-300'>
    <div className='relative bg-linear-to-r from-green-400 to-blue-500 h-40'>
      <div className='absolute left-1/2 transform -translate-x-1/2 top-20'>
        <img
          src={profileimage}
          alt={name}
          className='w-36 h-36 rounded-full border-4 border-white shadow-xl object-cover'
        />
      </div>
    </div>


    <div className='mt-24 text-center px-6 pb-10'>
      <h2 className='text-3xl font-bold text-gray-800'>{name}</h2>
      <div className='flex justify-center items-center mt-2 space-x-2'>
        <span className='text-yellow-500 text-lg'><FaStar /></span>
        <span className='bg-linear-to-r from-green-400 to-blue-500 text-white text-sm px-3 py-1 rounded-full font-semibold shadow-md'>
          {rating} / 5
        </span>
      </div>

      <p className='mt-3 text-gray-500 text-lg'>
        <span className='font-semibold text-gray-700'>Subject:</span> {subject}
      </p>


      <div className='mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed'>
        <p>
          Hi, I'm <span className='font-semibold text-gray-800'>{name}</span> — a passionate student looking for like-minded
          study partners! I love collaborative learning, solving academic challenges,
          and helping others grow. Let's connect and make studying fun together. 
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 text-sm text-gray-700'>
        <div className='p-3 bg-gray-50 rounded-xl shadow-sm'>
          <p className='font-semibold text-gray-800'> Subject</p>
          <p>{subject}</p>
        </div>
        <div className='p-3 bg-gray-50 rounded-xl shadow-sm'>
          <p className='font-semibold text-gray-800'> Level</p>
          <p>{experienceLevel}</p>
        </div>
        <div className='p-3 bg-gray-50 rounded-xl shadow-sm'>
          <p className='font-semibold text-gray-800'> Availability</p>
          <p>{availabilityTime}</p>
        </div>
        <div className='p-3 bg-gray-50 rounded-xl shadow-sm'>
          <p className='font-semibold text-gray-800'> Partners</p>
          <p>{studyMode}</p>
        </div>
      </div>

     
      <div className='text-center gap-4 mt-10'>
        <button 
        onClick={handelAdd}
        disabled={loading || added} 
        className={`px-6 py-2 rounded-full font-semibold transition-transform duration-200 shadow-md
                ${added
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'bg-linear-to-r from-green-400 to-blue-500 text-white hover:scale-105'}
              `}>
         {added ? 'Added' : loading ? 'Adding...' : 'Add Partner'}
        </button>
        
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default PartnerProfile;