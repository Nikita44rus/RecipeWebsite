import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import Newsletter from "../components/Newsletter";
import { fetchRecipes } from "../services/api";
import { useFavorites } from "../context/FavoritesContext";

const Favorites = () => {
  const { favorites } = useFavorites();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes()
      .then(setRecipes)
      .finally(() => setLoading(false));
  }, []);

  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  if (loading) {
    return <p className="text-center py-20 text-gray-500">Loading...</p>;
  }

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
              className="inline-block bg-gradient-to-b from-gray-900 to-black text-white px-8 py-3.5 rounded-[16px] text-sm font-medium hover:from-gray-800 hover:to-gray-900 transition"
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