import { Link } from "react-router-dom";
import TimerIcon from "../assets/images/Timer.svg";
import ForkKnifeIcon from "../assets/images/ForkKnife.svg";
import whiteLove from "../assets/images/white-love.png";
import redLove from "../assets/images/red-love.png";
import { useFavorites } from "../context/FavoritesContext";

const RecipeCard = ({ recipe }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const liked = isFavorite(recipe.id);

  return (
    <div
      className="group rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition flex flex-col h-[420px]"
      style={{ background: "linear-gradient(to bottom, #E7F9FD 0%, #E7F9FD 100%)" }}
    >
      <div className="relative overflow-hidden h-56">
        <Link to={`/recipe/${recipe.id}`}>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </Link>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(recipe.id);
          }}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
        >
          <img
            src={liked ? redLove : whiteLove}
            alt="like"
            className="w-9 h-9 object-contain"
          />
        </button>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <Link to={`/recipe/${recipe.id}`}>
          <h3 className="font-semibold text-lg leading-snug mb-4 group-hover:text-orange-500 transition">
            {recipe.title}
          </h3>
        </Link>
        <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto">
          <span className="flex items-center gap-1.5">
            <img src={TimerIcon} alt="" className="w-4 h-4" />
            {recipe.time}
          </span>
          <span className="flex items-center gap-1.5">
            <img src={ForkKnifeIcon} alt="" className="w-4 h-4" />
            {recipe.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;