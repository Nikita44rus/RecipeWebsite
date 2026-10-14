const Newsletter = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      <div className="bg-[#E7F9FD] rounded-[40px] md:rounded-[60px] py-16 md:py-20 px-6 relative overflow-hidden">
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Deliciousness to your inbox
          </h2>
          <p className="text-gray-600 mb-10 text-[15px] md:text-base leading-relaxed max-w-lg mx-auto">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliquat enim ad minim
          </p>

          <form className="flex flex-col sm:flex-row items-center max-w-md mx-auto bg-white rounded-2xl p-1.5 shadow-sm">
            <input
              type="email"
              placeholder="Your email address..."
              className="flex-1 px-5 py-3.5 rounded-xl border-none outline-none text-sm w-full"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-3.5 rounded-xl font-medium hover:bg-gray-800 transition text-sm w-full sm:w-auto mt-2 sm:mt-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;