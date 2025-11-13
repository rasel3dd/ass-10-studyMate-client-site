import React, { useEffect, useState } from 'react';

const MyCollection = () => {
    
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/connection')
      .then((res) => res.json())
      .then((data) => setConnections(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this connection?");
    if (!confirmDelete) return;

    fetch(`http://localhost:5000/connection/${id}`,{ method: "DELETE", })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.deletedCount > 0) {
          alert("Connection deleted successfully!");
          
          setConnections(connections.filter((item) => item._id !== id));
        }
      })
      .catch((err) => console.error(err));
  };
    return (
        <div className='w-11/12 mx-auto py-10'>
      <h1 className='text-3xl font-bold mb-6 text-center text-green-600'>My Study Connections</h1>

      {connections.length === 0 ? (
        <p className='text-center text-gray-500'>You have no connections .</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {connections.map((p) => (
            <div key={p._id} className='bg-white p-4 rounded-xl shadow hover:shadow-lg transition'>
              <img src={p.profileimage} alt={p.name} className='w-24 h-24 mx-auto rounded-full object-cover mb-3' />
              <h2 className='text-xl font-semibold text-center'>{p.name}</h2>
              <p className='text-center text-gray-500 text-sm'>{p.subject}</p>
              <button 
              onClick={() => handleDelete(p._id)} 
              className='btn bg-red-300'>Delete</button>
            </div>
            
          ))}
        </div>
      )}
    </div>
    );
};

export default MyCollection;