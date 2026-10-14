import Newsletter from "../components/Newsletter";

import chefImage from "../assets/images/chief.png";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Contact us</h1>
      
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
        {/* Image */}
        <div className="md:w-1/3">
          <img 
            src={chefImage}
            alt="chief" 
            className="w-full rounded-3xl object-cover"
          />
        </div>

        {/* Form */}
        <form className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Name</label>
            <input type="text" placeholder="Enter your name..." className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
            <input type="email" placeholder="Your email address..." className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Subject</label>
            <input type="text" placeholder="Enter subject..." className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Enquiry Type</label>
            <select className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black bg-white">
              <option>Advertising</option>
              <option>Support</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Messages</label>
            <textarea rows="5" placeholder="Enter your messages..." className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black resize-none"></textarea>
          </div>
          <div className="md:col-span-2 flex justify-center md:justify-start">
            <button type="submit" className="bg-black text-white px-10 py-4 rounded-xl font-semibold hover:bg-gray-800 transition">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="mt-20">
        <Newsletter />
      </div>
    </div>
  );
};

export default Contact;