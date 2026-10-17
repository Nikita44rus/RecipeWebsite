import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import Newsletter from "../components/Newsletter";
import { recipes } from "../data/recipes";

const Recipes = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6; //карточек на одной странице

  // Фильтрация по поиску
  const filtered = recipes.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  // Сброс на первую страницу при изменении поиска
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // Пагинация
  const totalPages = Math.ceil(filtered.length / recipesPerPage);
  const startIndex = (currentPage - 1) * recipesPerPage;
  const currentRecipes = filtered.slice(startIndex, startIndex + recipesPerPage);

  // Генерация номеров страниц
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5; // максимум видимых кнопок

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  const goToPage = (page) => {
    if (page === "..." || page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      {/* Заголовок */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Recipes</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliquat enim ad minim
        </p>
      </section>

      {/* Поиск */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-6 py-4 rounded-full border border-gray-200 outline-none focus:ring-2 focus:ring-black/10 text-sm"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-b from-gray-900 to-black text-white px-6 py-2.5 rounded-full text-sm font-medium">
            Search
          </button>
        </div>
      </section>

      {/* Сетка рецептов */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        {currentRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-20">No recipes found.</p>
        )}
      </section>

      {/* Пагинация */}
      {totalPages > 1 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex justify-center items-center gap-2 flex-wrap">
            {/* Кнопка "Назад" */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-black hover:text-white"
              }`}
            >
              ‹
            </button>

            {/* Номера страниц */}
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition ${
                  page === currentPage
                    ? "bg-black text-white"
                    : page === "..."
                    ? "bg-transparent text-gray-500 cursor-default"
                    : "bg-gray-100 hover:bg-black hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Кнопка "Вперёд" */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-black hover:text-white"
              }`}
            >
              ›
            </button>
          </div>
        </section>
      )}

      <Newsletter />
    </div>
  );
};

export default Recipes;