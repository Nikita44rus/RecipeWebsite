import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Newsletter from "../components/Newsletter";
import RecipeCard from "../components/RecipeCard";
import { recipes } from "../data/recipes";
import TimerIcon from "../assets/images/Timer.svg";
import ForkKnifeIcon from "../assets/images/ForkKnife.svg";
import AdsImg from "../assets/images/Ads.png";
import PrintIcon from "../assets/images/printer.png";
import ShareIcon from "../assets/images/share.png";

// Компонент одного ингредиента с рабочей галочкой
const IngredientItem = ({ text }) => {
  const [checked, setChecked] = useState(false);

  return (
    <li className="flex items-center gap-4 border-b border-gray-100 pb-4">
      <button
        type="button"
        onClick={() => setChecked(!checked)}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
          checked ? "bg-black border-black" : "bg-white border-gray-300"
        }`}
      >
        {checked && (
          <span className="text-white text-xs font-bold leading-none">✓</span>
        )}
      </button>
      <span
        className={`text-gray-700 transition ${
          checked ? "line-through text-gray-400" : ""
        }`}
      >
        {text}
      </span>
    </li>
  );
};

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id)) || recipes[0];

  const otherRecipes = recipes.filter((r) => r.id !== recipe.id).slice(0, 3);
  const related = recipes.filter((r) => r.id !== recipe.id).slice(0, 4);

  return (
    <div className="bg-white">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 max-w-4xl leading-tight">
          {recipe.title}
        </h1>

        {/* Метаданные + кнопки Print/Share */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
          <div className="flex flex-wrap items-center gap-0 text-sm text-gray-600">
            <div className="flex items-center gap-3 pr-6">
              <img
                src={recipe.authorImg}
                alt={recipe.author}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">{recipe.author}</p>
                <p className="text-xs text-gray-500">{recipe.date}</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-gray-200 mx-2"></div>

            <div className="flex items-center gap-2 px-6">
              <img src={TimerIcon} alt="" className="w-5 h-5" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Prep Time
                </p>
                <p className="font-medium">{recipe.prepTime}</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-gray-200 mx-2"></div>

            <div className="flex items-center gap-2 px-6">
              <img src={TimerIcon} alt="" className="w-5 h-5" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Cook Time
                </p>
                <p className="font-medium">{recipe.cookTime}</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-gray-200 mx-2"></div>

            <div className="flex items-center gap-2 px-6">
              <img src={ForkKnifeIcon} alt="" className="w-5 h-5" />
              <p className="font-medium">{recipe.category}</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-full bg-[#E7F9FD] flex items-center justify-center group-hover:bg-[#d4f3fa] transition">
                <img
                  src={PrintIcon}
                  alt="Print"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-[11px] font-medium uppercase tracking-wide text-gray-700">
                PRINT
              </span>
            </button>

            <button className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-full bg-[#E7F9FD] flex items-center justify-center group-hover:bg-[#d4f3fa] transition">
                <img
                  src={ShareIcon}
                  alt="Share"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-[11px] font-medium uppercase tracking-wide text-gray-700">
                SHARE
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-8 mb-10">
          <div className="lg:w-[65%] relative rounded-3xl overflow-hidden bg-gray-100">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover min-h-[420px]"
            />
            {/* Play button */}
            <button className="absolute inset-0 flex items-center justify-center group">
              <div className="w-[120px] h-[120px] bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-105 transition">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M10 6.5V25.5L26 16L10 6.5Z" fill="#181945" />
                </svg>
              </div>
            </button>
          </div>

          {/* Nutrition */}
          <div className="lg:w-[35%] bg-[#E7F9FD] rounded-3xl p-7 flex flex-col justify-between min-h-[420px]">
            <div>
              <h3 className="font-bold text-lg mb-6">Nutrition Information</h3>
              <div className="space-y-4 text-sm">
                {Object.entries(recipe.nutrition).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between border-b border-white/60 pb-3"
                  >
                    <span className="text-gray-600 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-8 leading-relaxed">
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Описание */}
        <p className="text-gray-600 leading-relaxed mb-12 text-[15px] max-w-4xl">
          {recipe.description}
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-[65%]">
            <div className="mb-14">
              <h2 className="text-2xl font-bold mb-8">Ingredients</h2>

              <h3 className="font-semibold mb-5">For main dish</h3>
              <ul className="space-y-4 mb-10">
                {recipe.ingredients.main.map((item, i) => (
                  <IngredientItem key={i} text={item} />
                ))}
              </ul>

              {recipe.ingredients.sauce?.length > 0 && (
                <>
                  <h3 className="font-semibold mb-5">For the sauce</h3>
                  <ul className="space-y-4">
                    {recipe.ingredients.sauce.map((item, i) => (
                      <IngredientItem key={i} text={item} />
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-8">Directions</h2>
              <div className="space-y-10">
                {recipe.directions.map((step, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-medium text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{step.title}</h4>
                      <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
                        {step.text}
                      </p>
                      {step.image && (
                        <img
                          src={step.image}
                          alt={`Step ${index + 1}`}
                          className="rounded-2xl w-full max-w-lg object-cover"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-[35%]">
            <div>
              <h3 className="font-bold text-lg mb-6">Other Recipe</h3>
              <div className="space-y-5">
                {otherRecipes.map((r) => (
                  <Link
                    key={r.id}
                    to={`/recipe/${r.id}`}
                    className="flex gap-4 group"
                  >
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-24 h-24 rounded-2xl object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-semibold text-sm leading-snug group-hover:text-orange-500 transition line-clamp-2">
                        {r.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        By {r.author}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-8 rounded-3xl overflow-hidden">
                <img
                  src={AdsImg}
                  alt="Don't forget to eat healthy food"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You may like these recipe too */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          You may like these recipe too
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default RecipeDetails;