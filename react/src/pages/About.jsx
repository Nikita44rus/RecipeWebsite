import Newsletter from "../components/Newsletter";
import RecipeCard from "../components/RecipeCard";
import { recipes } from "../data/recipes";
import chefImage from "../assets/images/chief.png";
import ourStoryPic from "../assets/images/OurStoryPic.svg";

const About = () => {
  const bottomRecipes = recipes.slice(0, 4);

  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About us</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">
          Get to know the people and the idea behind Foodieland — a place where
          recipes, stories, and everyday cooking come together.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 w-full">
            <div className="rounded-[30px] overflow-hidden bg-gradient-to-b from-white to-[#E7F9FD] p-6">
              <img
                src={chefImage}
                alt="About Foodieland"
                className="w-full object-contain max-h-[480px]"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              About Foodieland
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">
              Foodieland is a modern recipe platform created for people who enjoy
              cooking at home. Whether you are looking for a quick weekday dinner,
              a weekend dessert, or a healthy lunch idea, you can browse recipes
              by category, open detailed pages with ingredients and steps, and
              save the dishes you want to try later.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">
              The website was built with React and Tailwind CSS. The focus is on
              a clean layout, clear typography, and a responsive design that works
              well on phones, tablets, and desktops. Navigation is simple: Home,
              Recipes, Favorites, Blog, Contact, and About us.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">
              Besides recipes, Foodieland includes a blog with articles about
              food and cooking, a contact form for questions and feedback, and a
              favorites list so you can keep your preferred recipes in one place.
              Everything is designed to feel light, friendly, and easy to use.
            </p>

            <h3 className="text-lg font-bold mb-3 mt-8">Project Overview</h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              This project was developed as part of the Web Development course
              under the mentorship of the course instructors. It demonstrates
              practical skills in front-end development, component-based
              architecture, routing, and responsive UI design.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#E7F9FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed text-[15px] max-w-3xl mx-auto text-center mb-5">
            Our mission is to make cooking more approachable and enjoyable. We
            believe that good food should not require complicated tools or long
            hours in the kitchen. Clear recipes, honest photos, and a calm
            interface help you focus on the process and the result.
          </p>
          <p className="text-gray-600 leading-relaxed text-[15px] max-w-3xl mx-auto text-center mb-5">
            We want Foodieland to be a practical companion for beginners and a
            useful library for experienced home cooks. You can explore new
            cuisines, revisit classic dishes, and collect favorites that match
            your taste and schedule.
          </p>
          <p className="text-gray-600 leading-relaxed text-[15px] max-w-3xl mx-auto text-center">
            In the long run, we aim to grow the collection of recipes and
            articles, improve search and filters, and keep the experience
            clear, fast, and comfortable for every visitor.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">
              Foodieland started as a learning project with a simple idea: present
              recipes and food stories in a way that feels both beautiful and
              useful. The first version included a home page with categories, a
              recipe grid, and detailed recipe pages with ingredients and steps.
            </p>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Later we added a blog, a contact form, and a favorites feature.
              Today Foodieland is a complete multi-page demo — from discovering
              recipes to saving favorites and reading articles — built to practice
              modern front-end development and deliver a clean user experience.
            </p>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center">
            <img
              src={ourStoryPic}
              alt="Our Story"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </section>

      <Newsletter />
      
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

export default About;