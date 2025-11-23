import React from 'react';

const steps = [
{
id: 1,
title: 'Create Profile',
desc: 'Add your name, subjects and availability.'
},
{
id: 2,
title: 'Find Partners',
desc: 'Search students who match your study goals.'
},
{
id: 3,
title: 'Start Studying',
desc: 'Schedule sessions and study together anytime.'
}
]
const HowWork = () => {
    return (
        <div>
            <section className='max-w-4xl mx-auto px-4 py-12'>
<h2 className='text-2xl font-bold text-center mb-8'>How StudyMate Works</h2>


<div className='grid gap-4 sm:grid-cols-3'>
{steps.map(step => (
<div key={step.id} className='p-5 border rounded-xl bg-white text-center shadow-sm'>
<div className='text-3xl font-bold text-green-600 mb-2'>{step.id}</div>
<h3 className='font-semibold text-lg'>{step.title}</h3>
<p className='text-sm text-gray-600 mt-2'>{step.desc}</p>
</div>
))}
</div>
</section>
        </div>
    );
};

export default HowWork;