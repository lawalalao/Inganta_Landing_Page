/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faBolt, faChartSimple, faEnvelope, faSmile } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
function FeatureCard({ icon, title, description, onClick }) {
  return (
    <div
      className="w-full lg:w-[30%] flex flex-col justify-center items-center p-6 mx-2 my-4 bg-white rounded-lg shadow hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="mb-4 text-2xl text-violet-800 w-10 h-10 bg-gray-50 rounded-full flex justify-center items-center">
        <FontAwesomeIcon icon={icon} className='text-violet-600' />
      </div>
      <h2 className="text-center mb-2 text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

function FeatureWrapper() {
  const features = [
    { id: 1, icon: faEnvelope, title: 'Comprehensive Property Management', description: 'Manage all your residential and commercial properties in one place, powered by Inganta' },
    { id: 2, icon: faBolt, title: 'Real-Time Payment Tracking', description: 'Track rent payments in real-time and gain financial insights through Inganta platform.' },
    { id: 3, icon: faChartSimple, title: 'Efficient Service Requests', description: 'Streamline service requests, from cleaning to maintenance, with Inganta integrated solution.' },
    { id: 4, icon: faSmile, title: 'Effective Complaint Resolution', description: 'Resolve issues swiftly with Inganta complaint tracking system, ensuring tenant satisfaction.' },
    { id: 5, icon: faAtom, title: 'Canteen Convenience', description: 'Experience the ease of meal ordering from the canteen, brought to you by Inganta.' },
    { id: 6, icon: faBolt, title: 'Real-Time Payment Tracking', description: 'Track rent payments in real-time and gain financial insights through Inganta platform.' },
    // Add more feature objects as needed
  ];

  return (
    <div className="container mx-auto py-12 space-y-4">
      <h4 className="text-center font-semibold text-violet-500 text-md lg:text-lg">Features</h4>
      <h2 className="font-semibold text-center text-xl lg:text-3xl">Why Choose Inganta Platform?</h2>
      <p className="mx-auto text-center text-gray-900/70 text-md lg:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident deserunt, enim ullam repellendus expedita perspiciatis! Fuga voluptatem maiores dolores sequi pariatur blanditiis odit voluptatum harum?</p>
      <div className="flex flex-wrap justify-center">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            onClick={() => {
              // Handle click event for the feature card
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureWrapper;
