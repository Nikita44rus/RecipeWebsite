import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import { fetchRecipes } from "../services/api";
import { useFavorites } from "../context/FavoritesContext";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//Основные картинки
import badgeHandpicked from "../assets/images/badge-handpicked.png";
import BadgeCenter from "../assets/images/Badge.png";
import chickenWings from "../assets/images/chicken-wings.png";
import authorJohn from "../assets/images/author-john.png";
import TimerIcon from "../assets/images/Timer.svg";
import ForkKnifeIcon from "../assets/images/ForkKnife.svg";
import heroImage from "../assets/images/hero-image.png";

//Категории
import catBreakfast from "../assets/images/categories/breakfast.png";
import catVegan from "../assets/images/categories/vegan.png";
import catMeat from "../assets/images/categories/meat.png";
import catDessert from "../assets/images/categories/dessert.png";
import catLunch from "../assets/images/categories/lunch.png";
import catChocolate from "../assets/images/categories/chocolate.png";

//Сердечки и реклама
import whiteLove from "../assets/images/white-love.png";
import redLove from "../assets/images/red-love.png";
import AdsImg from "../assets/images/Ads.png";

//Instagram
import instaFood12 from "../assets/images/instagram/food-12.png";
import instaFood9 from "../assets/images/instagram/food-9.png";
import instaFood10 from "../assets/images/instagram/food-10.png";
import instaFood11 from "../assets/images/instagram/food-11.png";
import instaAvatar from "../assets/images/instagram/AOval.png";
import instaBlue from "../assets/images/instagram/blue.png";
import instaLike from "../assets/images/instagram/Like.png";
import instaComment from "../assets/images/instagram/Comment.png";
import instaMessage from "../assets/images/instagram/Message.png";
import instaSave from "../assets/images/instagram/Save.png";
import instaOval from "../assets/images/instagram/Oval.png";
import instaIcon from "../assets/images/instagram/instra.png";

//Swiper доп. картинки
import salmonImg from "../assets/images/salmon.jpg";
import food2 from "../assets/images/food-2.png";
import food3 from "../assets/images/food-3.png";
import food4 from "../assets/images/food-4.png";

const Home = () => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [apiRecipes, setApiRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes().then(setApiRecipes);
  }, []);

  const categories = [
    { name: "Breakfast", image: catBreakfast, gradientColor: "#f3f4f6" },
    { name: "Vegan", image: catVegan, gradientColor: "#dcfce7" },
    { name: "Meat", image: catMeat, gradientColor: "#fee2e2" },
    { name: "Dessert", image: catDessert, gradientColor: "#fef9c3" },
    { name: "Lunch", image: catLunch, gradientColor: "#ffedd5" },
    { name: "Chocolate", image: catChocolate, gradientColor: "#fef3c7" },
  ];

  const instagramPosts = [
    {
      id: 1,
      image: instaFood12,
      caption: "The vegetable dishes need to have certain vitamin for those people...",
      date: "September 19",
    },
    {
      id: 2,
      image: instaFood9,
      caption: "Sweet food can bring someone into happiness as long as they don't eat too much",
      date: "September 19",
    },
    {
      id: 3,
      image: instaFood10,
      caption: "What are you doing before start cooking? Do you ask yourself dinner?",
      date: "September 19",
    },
    {
      id: 4,
      image: instaFood11,
      caption: "Steak never be wrong. It's suitable for you who want romantic dinner",
      date: "September 19",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="rounded-[30px] overflow-hidden"
        >
          {/* SLIDE 1 */}
          <SwiperSlide>
            <div className="bg-[#E7F9FD] flex flex-col lg:flex-row min-h-[520px] relative">
              <div className="hidden lg:flex absolute inset-0 flex items-center justify-center pointer-events-none z-20 -translate-y-35 translate-x-6">
                <img src={BadgeCenter} alt="Handpicked Recipes" className="w-[140px] h-[140px] object-contain drop-shadow-xl" />
              </div>
              <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-sm font-medium w-fit mb-6 shadow-sm">
                  <img src={badgeHandpicked} alt="badge" className="w-6 h-6 object-contain" />
                  Hot Recipes
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
                  Spicy delicious<br />chicken wings
                </h1>
                <p className="text-gray-600 mb-8 max-w-md leading-relaxed text-[15px]">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliquat enim ad minim
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 text-sm">
                    <img src={TimerIcon} alt="timer" className="w-4 h-4" /> 30 Minutes
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 text-sm">
                    <img src={ForkKnifeIcon} alt="category" className="w-4 h-4" /> Chicken
                  </span>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <img src={authorJohn} alt="John Smith" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-medium text-sm">John Smith</p>
                      <p className="text-xs text-gray-500">15 March 2022</p>
                    </div>
                  </div>
                  <Link to="/recipe/1" className="bg-gradient-to-b from-gray-900 to-black text-white px-7 py-3 rounded-[16px] text-sm font-medium hover:from-gray-800 hover:to-gray-900 transition flex items-center gap-2">
                    View Recipes →
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 relative min-h-[340px] lg:min-h-full bg-white">
                <img src={chickenWings} alt="Chicken wings" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <div className="bg-[#E7F9FD] flex flex-col lg:flex-row min-h-[520px] relative">
              <div className="hidden lg:flex absolute inset-0 flex items-center justify-center pointer-events-none z-20 -translate-y-35 translate-x-6">
                <img src={BadgeCenter} alt="Handpicked Recipes" className="w-[140px] h-[140px] object-contain drop-shadow-xl" />
              </div>
              <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-sm font-medium w-fit mb-6 shadow-sm">
                  <img src={badgeHandpicked} alt="badge" className="w-6 h-6 object-contain" />
                  Hot Recipes
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
                  Fresh healthy<br />salmon bowl
                </h1>
                <p className="text-gray-600 mb-8 max-w-md leading-relaxed text-[15px]">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliquat enim ad minim
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 text-sm">
                    <img src={TimerIcon} alt="timer" className="w-4 h-4" /> 25 Minutes
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 text-sm">
                    <img src={ForkKnifeIcon} alt="category" className="w-4 h-4" /> Fish
                  </span>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/150?img=32" alt="Author" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-medium text-sm">Sarah Johnson</p>
                      <p className="text-xs text-gray-500">10 April 2022</p>
                    </div>
                  </div>
                  <Link to="/recipe/2" className="bg-gradient-to-b from-gray-900 to-black text-white px-7 py-3 rounded-[16px] text-sm font-medium hover:from-gray-800 hover:to-gray-900 transition flex items-center gap-2">
                    View Recipes →
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 relative min-h-[340px] lg:min-h-full">
                <img src={salmonImg} alt="Salmon bowl" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide>
            <div className="bg-[#E7F9FD] flex flex-col lg:flex-row min-h-[520px] relative">
              <div className="hidden lg:flex absolute inset-0 flex items-center justify-center pointer-events-none z-20 -translate-y-35 translate-x-6">
                <img src={BadgeCenter} alt="Handpicked Recipes" className="w-[140px] h-[140px] object-contain drop-shadow-xl" />
              </div>
              <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-sm font-medium w-fit mb-6 shadow-sm">
                  <img src={badgeHandpicked} alt="badge" className="w-6 h-6 object-contain" />
                  Hot Recipes
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
                  Classic Chicken Parm<br />with Spaghetti
                </h1>
                <p className="text-gray-600 mb-8 max-w-md leading-relaxed text-[15px]">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliquat enim ad minim
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 text-sm">
                    <img src={TimerIcon} alt="timer" className="w-4 h-4" /> 40 Minutes
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 text-sm">
                    <img src={ForkKnifeIcon} alt="category" className="w-4 h-4" /> Chicken
                  </span>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/150?img=15" alt="Author" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-medium text-sm">Michael Brown</p>
                      <p className="text-xs text-gray-500">22 May 2022</p>
                    </div>
                  </div>
                  <Link to="/recipe/3" className="bg-gradient-to-b from-gray-900 to-black text-white px-7 py-3 rounded-[16px] text-sm font-medium hover:from-gray-800 hover:to-gray-900 transition flex items-center gap-2">
                    View Recipes →
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 relative min-h-[340px] lg:min-h-full">
                <img src={food2} alt="Chicken Parm" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 4 */}
          <SwiperSlide>
            <div className="bg-[#E7F9FD] flex flex-col lg:flex-row min-h-[520px] relative">
              <div className="hidden lg:flex absolute inset-0 flex items-center justify-center pointer-events-none z-20 -translate-y-35 translate-x-6">
                <img src={BadgeCenter} alt="Handpicked Recipes" className="w-[140px] h-[140px] object-contain drop-shadow-xl" />
              </div>
              <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-sm font-medium w-fit mb-6 shadow-sm">
                  <img src={badgeHandpicked} alt="badge" className="w-6 h-6 object-contain" />
                  Hot Recipes
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
                  Baked Lobster<br />with Breadcrumbs
                </h1>
                <p className="text-gray-600 mb-8 max-w-md leading-relaxed text-[15px]">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliquat enim ad minim
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 text-sm">
                    <img src={TimerIcon} alt="timer" className="w-4 h-4" /> 50 Minutes
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 text-sm">
                    <img src={ForkKnifeIcon} alt="category" className="w-4 h-4" /> Seafood
                  </span>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/150?img=25" alt="Author" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-medium text-sm">Emily Davis</p>
                      <p className="text-xs text-gray-500">05 June 2022</p>
                    </div>
                  </div>
                  <Link to="/recipe/4" className="bg-gradient-to-b from-gray-900 to-black text-white px-7 py-3 rounded-[16px] text-sm font-medium hover:from-gray-800 hover:to-gray-900 transition flex items-center gap-2">
                    View Recipes →
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 relative min-h-[340px] lg:min-h-full">
                <img src={food3} alt="Baked Lobster" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 5 */}
          <SwiperSlide>
            <div className="bg-[#E7F9FD] flex flex-col lg:flex-row min-h-[520px] relative">
              <div className="hidden lg:flex absolute inset-0 flex items-center justify-center pointer-events-none z-20 -translate-y-35 translate-x-6">
                <img src={BadgeCenter} alt="Handpicked Recipes" className="w-[140px] h-[140px] object-contain drop-shadow-xl" />
              </div>
              <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-sm font-medium w-fit mb-6 shadow-sm">
                  <img src={badgeHandpicked} alt="badge" className="w-6 h-6 object-contain" />
                  Hot Recipes
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
                  Creamy Chicken with<br />Zucchini and Carrots
                </h1>
                <p className="text-gray-600 mb-8 max-w-md leading-relaxed text-[15px]">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliquat enim ad minim
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 text-sm">
                    <img src={TimerIcon} alt="timer" className="w-4 h-4" /> 35 Minutes
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 text-sm">
                    <img src={ForkKnifeIcon} alt="category" className="w-4 h-4" /> Chicken
                  </span>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/150?img=47" alt="Author" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-medium text-sm">Lisa Anderson</p>
                      <p className="text-xs text-gray-500">18 July 2022</p>
                    </div>
                  </div>
                  <Link to="/recipe/5" className="bg-gradient-to-b from-gray-900 to-black text-white px-7 py-3 rounded-[16px] text-sm font-medium hover:from-gray-800 hover:to-gray-900 transition flex items-center gap-2">
                    View Recipes →
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 relative min-h-[340px] lg:min-h-full">
                <img src={food4} alt="Creamy Chicken" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Categories</h2>
          <button className="bg-[#E7F9FD] text-sm font-medium w-[200px] h-[60px] rounded-[16px] hover:bg-[#d4f3fa] transition flex items-center justify-center">
            View All Categories
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 justify-items-center">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="w-[180px] h-[202px] rounded-2xl p-5 text-center cursor-pointer hover:shadow-md transition flex flex-col items-center justify-center"
              style={{ background: `linear-gradient(to bottom, #ffffff 0%, ${cat.gradientColor} 100%)` }}
            >
              <img src={cat.image} alt={cat.name} className="w-16 h-16 object-contain" style={{ marginBottom: "50px" }} />
              <p className="font-medium text-sm">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SIMPLE & TASTY RECIPES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple and tasty recipes</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliquat enim ad minim
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {apiRecipes.slice(0, 5).map((recipe) => (
            <div
              key={recipe.id}
              className="group rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition flex flex-col h-[420px]"
              style={{ background: "linear-gradient(to bottom, #E7F9FD 0%, #E7F9FD 100%)" }}
            >
              <div className="relative overflow-hidden h-56">
                <Link to={`/recipe/${recipe.id}`}>
                  <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </Link>
                <button onClick={() => toggleFavorite(recipe.id)} className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition">
                  <img src={isFavorite(recipe.id) ? redLove : whiteLove} alt="like" className="w-9 h-9 object-contain" />
                </button>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <Link to={`/recipe/${recipe.id}`}>
                  <h3 className="font-semibold text-lg leading-snug mb-4 group-hover:text-orange-500 transition">{recipe.title}</h3>
                </Link>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto">
                  <span className="flex items-center gap-1.5"><img src={TimerIcon} alt="" className="w-4 h-4" />{recipe.time}</span>
                  <span className="flex items-center gap-1.5"><img src={ForkKnifeIcon} alt="" className="w-4 h-4" />{recipe.category}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="rounded-3xl overflow-hidden h-[420px]">
            <img src={AdsImg} alt="Don't forget to eat healthy food" className="w-full h-full object-cover" />
          </div>

          {apiRecipes.slice(5, 8).map((recipe) => (
            <div
              key={recipe.id}
              className="group rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition flex flex-col h-[420px]"
              style={{ background: "linear-gradient(to bottom, #E7F9FD 0%, #E7F9FD 100%)" }}
            >
              <div className="relative overflow-hidden h-56">
                <Link to={`/recipe/${recipe.id}`}>
                  <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </Link>
                <button onClick={() => toggleFavorite(recipe.id)} className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition">
                  <img src={isFavorite(recipe.id) ? redLove : whiteLove} alt="like" className="w-9 h-9 object-contain" />
                </button>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <Link to={`/recipe/${recipe.id}`}>
                  <h3 className="font-semibold text-lg leading-snug mb-4 group-hover:text-orange-500 transition">{recipe.title}</h3>
                </Link>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto">
                  <span className="flex items-center gap-1.5"><img src={TimerIcon} alt="" className="w-4 h-4" />{recipe.time}</span>
                  <span className="flex items-center gap-1.5"><img src={ForkKnifeIcon} alt="" className="w-4 h-4" />{recipe.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EVERYONE CAN BE A CHEF */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Everyone can be a<br />chef in their own kitchen
            </h2>
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliquat enim ad minim
            </p>
            <Link to="/recipes" className="inline-block bg-gradient-to-b from-gray-900 to-black text-white px-8 py-3.5 rounded-[16px] text-sm font-medium hover:from-gray-800 hover:to-gray-900 transition">
              Learn More
            </Link>
          </div>
          <div className="lg:w-1/2">
            <img src={heroImage} alt="Chef" className="rounded-3xl w-full object-cover" />
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-[30px] py-14 px-4 md:px-8" style={{ background: "linear-gradient(to bottom, #ffffff 0%, #E7F9FD 100%)" }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Check out @foodieland on Instagram</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-[15px]">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliquat enim ad minim
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {instagramPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
                <div className="flex items-center justify-between px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <img src={instaAvatar} alt="Foodieland" className="w-6 h-6 rounded-full object-cover" />
                    <div className="leading-tight">
                      <div className="flex items-center gap-1">
                        <p className="text-xs font-semibold">Foodieland.</p>
                        <img src={instaBlue} alt="verified" className="w-2 h-2" />
                      </div>
                      <p className="text-[10px] text-gray-500">Tokyo, Japan</p>
                    </div>
                  </div>
                  <button className="text-gray-600 hover:text-black transition text-lg leading-none px-1">⋯</button>
                </div>

                <div className="aspect-square overflow-hidden">
                  <img src={post.image} alt="Instagram post" className="w-full h-full object-cover" />
                </div>

                <div className="flex items-center justify-between px-3 py-2.5">
                  <div className="flex items-center gap-3.5">
                    <button><img src={instaLike} alt="like" className="w-5 h-5 object-contain hover:scale-110 transition" /></button>
                    <button><img src={instaComment} alt="comment" className="w-5 h-5 object-contain hover:scale-110 transition" /></button>
                    <button><img src={instaMessage} alt="share" className="w-5 h-5 object-contain hover:scale-110 transition" /></button>
                  </div>
                  <button><img src={instaSave} alt="save" className="w-5 h-5 object-contain hover:scale-110 transition" /></button>
                </div>

                <div className="px-3 pb-1.5 flex items-center gap-1.5">
                  <img src={instaOval} alt="" className="w-4 h-4 rounded-full object-cover" />
                  <p className="text-xs">
                    Liked by <span className="font-semibold">craig_love</span> and <span className="font-semibold">44,686</span> others
                  </p>
                </div>

                <div className="px-3 pb-2 flex-grow">
                  <p className="text-xs leading-relaxed">
                    <span className="font-semibold">Foodieland. </span>{post.caption}
                  </p>
                </div>

                <div className="px-3 pb-3 mt-auto">
                  <p className="text-[10px] text-gray-400 tracking-wide">{post.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="#" className="inline-flex items-center gap-2.5 bg-black text-white px-8 py-3.5 rounded-[16px] text-sm font-medium hover:bg-gray-800 transition">
              Visit Our Instagram
              <img src={instaIcon} alt="instagram" className="w-4 h-4 object-contain" />
            </a>
          </div>
        </div>
      </section>

      {/* TRY THIS DELICIOUS RECIPE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold max-w-md leading-tight">
            Try this delicious recipe<br />to make your day
          </h2>
          <p className="text-gray-500 max-w-sm text-sm">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliquat enim ad minim
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apiRecipes.slice(8).map((recipe) => (
            <div key={recipe.id} className="group">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <Link to={`/recipe/${recipe.id}`}>
                  <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />
                </Link>
                <button onClick={() => toggleFavorite(recipe.id)} className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition">
                  <img src={isFavorite(recipe.id) ? redLove : whiteLove} alt="like" className="w-9 h-9 object-contain" />
                </button>
              </div>
              <Link to={`/recipe/${recipe.id}`}>
                <h3 className="font-semibold text-[15px] leading-snug mb-2 group-hover:text-orange-500 transition">{recipe.title}</h3>
              </Link>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1"><img src={TimerIcon} alt="" className="w-3.5 h-3.5" />{recipe.time}</span>
                <span className="flex items-center gap-1"><img src={ForkKnifeIcon} alt="" className="w-3.5 h-3.5" />{recipe.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <Newsletter />
    </div>
  );
};

export default Home;