import React, { useEffect, useState } from "react";


const MyCollection = () => {
  
  const [connections, setConnections] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("https://study-mate-bice.vercel.app/connection")
    .then((res) => res.json())
    .then((data) => setConnections(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this connection?"
    );
    if (!confirmDelete) return;

    fetch(`https://study-mate-bice.vercel.app/connection/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Connection deleted successfully!");
          setConnections(connections.filter((item) => item._id !== id));
        }
      })
      .catch((err) => console.error(err));
  };

  const openUpdateModal = (userData) => {
    setSelectedUser(userData);
    setShowModal(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedInfo = {
      studyMode: e.target.studyMode.value,
      subject: e.target.subject.value,
    };

    fetch(`https://study-mate-bice.vercel.app/connection/${selectedUser._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Profile updated successfully!");

          setConnections((prevConnections) =>
            prevConnections.map((item) =>
              item._id === selectedUser._id ? { ...item, ...updatedInfo } : item
            )
          );

          setShowModal(false);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='w-11/12 mx-auto py-10'>
  <h1 className='text-3xl font-bold mb-6 text-center text-green-600'>
    My Study Connections
  </h1>

  {connections.length === 0 ? (
    <p className='text-center text-gray-500'>You have no connections.</p>
  ) : (
    <div className='overflow-x-auto mt-6'>
      <table className='table w-full'>
        <thead className='bg-green-600 text-white'>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Study Mode</th>
            <th className='text-center'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {connections.map((p) => (
            <tr key={p._id} className='hover bg-white'>
              <td>
                <img
                  src={p.profileimage}
                  className='w-12 h-12 rounded-full object-cover'
                  alt={p.name}
                />
              </td>

              <td className='font-semibold'>{p.name}</td>
              <td>{p.subject}</td>
              <td>{p.studyMode}</td>

              <td className='text-center space-x-3'>
                <button
                  onClick={() => handleDelete(p._id)}
                  className='btn btn-xs bg-red-300'
                >
                  Delete
                </button>

                <button
                  onClick={() => openUpdateModal(p)}
                  className='btn btn-xs bg-green-500 text-white'
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}

  {showModal && selectedUser && (
    <div className='fixed inset-0 bg-black/40 flex justify-center items-center'>
      <div className='bg-white rounded-xl p-6 w-96 shadow-lg'>
        <h2 className='text-xl font-bold mb-4 text-center'>Update Profile</h2>

        <form onSubmit={handleUpdate}>
          <label className='block mb-2 font-semibold'>StudyMode</label>
          <input
            type='text'
            name='studyMode'
            defaultValue={selectedUser.studyMode}
            className='input input-bordered w-full mb-3'
          />

          <label className='block mb-2 font-semibold'>Subject</label>
          <input
            type='text'
            name='subject'
            defaultValue={selectedUser.subject}
            className='input input-bordered w-full mb-3'
          />

          <div className='flex justify-between'>
            <button
              type='button'
              onClick={() => setShowModal(false)}
              className='btn bg-gray-300'
            >
              Cancel
            </button>

            <button type='submit' className='btn bg-green-600 text-white'>
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )}
</div>

  );
};

export default MyCollection;
