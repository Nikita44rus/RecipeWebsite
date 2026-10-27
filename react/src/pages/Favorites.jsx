import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import Newsletter from "../components/Newsletter";
import { recipes } from "../data/recipes";
import { useFavorites } from "../context/FavoritesContext";

const Favorites = () => {
  const { favorites } = useFavorites();
  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Favorites</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">
          Your saved recipes in one place. Click the heart again to remove.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        {favoriteRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-6">No favorites yet</p>
            <Link
              to="/recipes"
              className="inline-block bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition"
            >
              Browse recipes
            </Link>
          </div>
        )}
      </section>

      <Newsletter />
    </div>
  );
};

export default Favorites;