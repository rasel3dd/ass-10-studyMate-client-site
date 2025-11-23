import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";


const CreatePartnerProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    profileImage: "",
    rating: 5,
    experienceLevel: "",
    availabilityTime: "",
    studyMode: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (!loggedUser) {
      alert("Please log in to create your partner profile.");
      navigate("/login");
    } else {
      setUser(loggedUser);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!user) {
      alert("You must be logged in to create a profile!");
      return;
    }

    const newProfile = {
      ...formData,
      email: user.email, 
    };

    try {
      const response = await fetch("https://study-mate-bice.vercel.app/topList", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProfile),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Partner profile created successfully!");
        // navigate(`//${data.insertedId}`);
        setTimeout(() => {
    navigate('/');
  }, 1000); 
        
      } else {
        setError(data.message || "Failed to create profile.");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-11/12 mx-auto py-10 flex justify-center'>
      <div className='bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-4xl border border-gray-100'>
        <div className='p-8'>
          <h2 className='text-3xl font-bold text-gray-800 text-center mb-6'>
            Create Your Partner Profile
          </h2>

          {error && (
            <p className='text-red-500 text-center mb-4 font-semibold'>
               {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              
              <div>
                <label htmlFor="name" className='block font-semibold text-gray-700'>
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg'
                  placeholder='Enter your name'
                />
              </div>

              
              <div>
                <label htmlFor='subject" className="block font-semibold text-gray-700'>
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg'
                  placeholder="Subject"
                />
              </div>

              
              <div>
                <label htmlFor="experienceLevel" className="block font-semibold text-gray-700">
                  Experience Level
                </label>
                <input
                  id="experienceLevel"
                  type="text"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  required
                  className='w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg'
                  placeholder='Beginner / Intermediate / Expert'
                />
              </div>

              
              <div>
                <label htmlFor="availabilityTime" className='block font-semibold text-gray-700'>
                  Availability Time
                </label>
                <input
                  id="availabilityTime"
                  type="text"
                  value={formData.availabilityTime}
                  onChange={handleChange}
                  required
                  className='w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg'
                  placeholder=" 6 PM - 9 PM"
                />
              </div>

              
              <div>
                <label htmlFor="studyMode" className='block font-semibold text-gray-700'>
                  Study Mode
                </label>
                <input
                  id="studyMode"
                  type="text"
                  value={formData.studyMode}
                  onChange={handleChange}
                  required
                  className='w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg'
                  placeholder="Online / offline"
                />
              </div>

              
              <div>
                <label htmlFor="profileImage" className="block font-semibold text-gray-700">
                  Profile Image URL
                </label>
                <input
                  id="profileImage"
                  type="text"
                  value={formData.profileImage}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter image URL"
                />
              </div>

              
              <div>
                <label htmlFor="rating" className="block font-semibold text-gray-700">
                  Rating
                </label>
                <input
                  id="rating"
                  type="number"
                  value={formData.rating}
                  onChange={handleChange}
                  min="1"
                  max="5"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

          
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-3 mt-6 rounded-full font-semibold transition duration-200 shadow-md ${
                  loading
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-linear-to-r from-green-400 to-blue-500 text-white hover:scale-105"
                }`}
              >
                {loading ? "Creating..." : "Create Profile"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePartnerProfile;
