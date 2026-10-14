import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div>
            <Link to="/" className="text-2xl font-bold">
              Foodieland<span className="text-orange-500">.</span>
            </Link>
            <p className="mt-3 text-gray-500 text-sm max-w-xs">
              Lorem ipsum dolor sit amet, consectetuipisicing elit.
            </p>
          </div>

          <nav className="flex gap-8 text-sm font-medium">
            <Link to="/recipes" className="hover:text-black">Recipes</Link>
            <Link to="/blog" className="hover:text-black">Blog</Link>
            <Link to="/contact" className="hover:text-black">Contact</Link>
            <Link to="/about" className="hover:text-black">About us</Link>
          </nav>
        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2020 Flowbase. Powered by <span className="text-orange-500">Webflow</span></p>
          <div className="flex gap-4 mt-4 sm:mt-0">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;