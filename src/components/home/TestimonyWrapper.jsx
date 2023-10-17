import Slide1 from "../../assets/testimony/testimony1.jpg"
import Slide2 from "../../assets/testimony/testimony2.jpg"

// eslint-disable-next-line react/prop-types
function TestimonyCard({ photo, description, name, position }) {
  return (
    <div className="w-full lg:w-[45%] flex flex-col lg:flex-row lg:items-start items-center mb-6">
      <img src={photo} alt="Profile" className="w-full h-[50%] mb-4 lg:w-44 lg:h-32 rounded-md mr-4" />
      <div>
        <div className="flex items-center mb-2">
          
          <div className="text-xl text-violet-500">★★★★★</div>
        </div>
        <p className="text-gray-700 mb-2">{description}</p>
        <div className="w-full flex justify-between items-center">
        <p className="text-md font-semibold text-gray-900">{name}</p>
        <p className="text-md text-gray-600">{position}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonyWrapper() {
  const testimonies = [
    {
      photo: Slide1,
      description: 'Excellente expérience avec cette entreprise. Leur service est exceptionnel et le personnel est très amical.',
      name: 'Alice Johnson',
      position: 'Client satisfait',
    },
    {
      photo: Slide2,
      description: 'J\'ai été impressionné par la rapidité et l\'efficacité de leur service client. Je recommande fortement leurs services.',
      name: 'Bob Smith',
      position: 'Entrepreneur',
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">What Our Clients Say</h2>
      <div  className="w-full flex flex-col lg:flex-row lg:justify-between">
      {testimonies.map((testimony, index) => (
            <TestimonyCard
              key={index}
              photo={testimony.photo}
              rating={testimony.rating}
              description={testimony.description}
              name={testimony.name}
              position={testimony.position}
            />
            ))}
            </div>
    </div>
  );
}

export default TestimonyWrapper;
