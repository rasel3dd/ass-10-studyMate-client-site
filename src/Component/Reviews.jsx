import React from 'react';

const reviews = [
{
id: 1,
name: 'Aisha Rahman',
text: 'StudyMate helped me find a perfect study partner. My productivity doubled!',
avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop'
},
{
id: 2,
name: 'Nayeem Islam',
text: 'Sessions are smooth and very helpful. Highly recommended for students!',
avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop'
},
{
id: 3,
name: 'Siyam Islam',
text: 'Sessions are smooth and very helpful. Highly recommended for students!',
avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop'
},
{
id: 4,
name: 'Mahira Chowdhury',
text: 'Great platform to stay consistent. Found amazing partners!',
avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&auto=format&fit=crop'
}
]
const Reviews = () => {
    return (
        <div>
            <section className='max-w-5xl mx-auto px-4 py-14'>
<h2 className='text-2xl font-bold text-center mb-10'>● Testimonials / Reviews</h2>


<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
{reviews.map(review => (
<div key={review.id} className='p-6 rounded-xl border bg-white shadow-sm text-center'>
<img
src={review.avatar}
alt={review.name}
className='w-20 h-20 object-cover rounded-full mx-auto mb-4'
/>
<p className='text-gray-700 text-sm italic'>'{review.text}'</p>
<h4 className='font-semibold mt-3'>{review.name}</h4>
</div>
))}
</div>
</section>
        </div>
    );
};

export default Reviews;