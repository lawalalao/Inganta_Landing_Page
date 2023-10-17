function CardNewsletter() {
  return (
    <section id="newsletter" className="bg-violet-700 rounded-xl text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 lg:mb-4">
          Subscribe to our newsletter
        </h2>

        <div className="w-full lg:w-2/3 mx-auto">
          <form className="lg:flex items-center justify-center px-20 lg:px-4 space-y-6 lg:space-y-1">
            <input
              type="text"
              id="name"
              className="w-full lg:w-auto bg-transparent text-white border-2 border-white py-2 px-4 mb-2 lg:mb-0 mr-0 lg:mr-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="First name"
            />
            <input
              type="email"
              id="email"
              className="w-full lg:w-auto bg-transparent text-white border-2 border-white py-2 px-4 mb-2 lg:mb-0 mr-0 lg:mr-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Email address"
            />
            <button
              type="submit"
              className="w-full lg:w-auto bg-black text-white font-semibold py-2 px-6 rounded-md hover:text-violet-700 hover:bg-white focus:outline-none focus:ring focus:border-blue-300"
            >
              Subscribe Now
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default CardNewsletter;
