import Newsletter from "../components/Newsletter";
import RecipeCard from "../components/RecipeCard";
import { recipes } from "../data/recipes";
import chefImage from "../assets/images/chief.png";

const Contact = () => {
  const bottomRecipes = recipes.slice(0, 4);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Contact us
        </h1>

        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Image с градиентом */}
          <div className="md:w-1/3 w-full max-w-sm">
            <div className="rounded-[30px] p-6 flex items-end justify-center overflow-hidden bg-gradient-to-b from-white to-[#E7F9FD]">
              <img
                src={chefImage}
                alt="Chef"
                className="w-full object-contain max-h-[420px]"
              />
            </div>
          </div>

          {/* Form */}
          <form className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name..."
                className="border border-gray-200 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-black text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your email address..."
                className="border border-gray-200 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-black text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject..."
                className="border border-gray-200 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-black text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Enquiry Type
              </label>
              <select className="border border-gray-200 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-black bg-white text-sm">
                <option>Advertising</option>
                <option>Support</option>
                <option>Commercial</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Messages
              </label>
              <textarea
                rows="6"
                placeholder="Enter your messages..."
                className="border border-gray-200 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-black resize-none text-sm"
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-center md:justify-start pt-2">
              <button
                type="submit"
                className="bg-gradient-to-b from-gray-900 to-black text-white px-10 py-3.5 rounded-[12px] text-sm font-medium hover:from-gray-800 hover:to-gray-900 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Newsletter />

      {/* Рецепты внизу */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Check out the delicious recipe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bottomRecipes.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;