// eslint-disable-next-line react/prop-types
function AboutWrapper({ image }) {
  return (
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center py-12 px-4">
      <div className="lg:w-1/2 lg:mr-8">
        {/* Image à gauche */}
        <img
          src={image}
          alt="About Us"
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
      <div className="lg:w-1/2">
        {/* Texte "About Us" à droite */}
        <h2 className="text-3xl font-semibold text-center lg:text-left lg:text-5xl mb-4 ">About Us</h2>
        <p className="text-gray-700 text-center mb-4 lg:text-left">
           Ingata is a trusted name in property management, offering innovative solutions to property owners and tenants alike.
            Our platform enhances every aspect of property management, making Ingata the preferred choice of leading agencies.
        </p>
        <p className="text-gray-700 text-center mb-4 lg:text-left">
           Ingata is a trusted name in property management, offering innovative solutions to property owners and tenants alike.
            Our platform enhances every aspect of property management, making Ingata the preferred choice of leading agencies.
        </p>
        <p className="text-gray-700 text-center mb-4 lg:text-left">
           Ingata is a trusted name in property management, offering innovative solutions to property owners and tenants alike.
            Our platform enhances every aspect of property management, making Ingata the preferred choice of leading agencies.
        </p>
      </div>
    </div>
  );
}

export default AboutWrapper;
