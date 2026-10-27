import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import { posts } from "../data/posts";
import { recipes } from "../data/recipes";
import AdsImg from "../assets/images/Ads.png";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const totalPages = Math.ceil(filtered.length / postsPerPage) || 1;
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filtered.slice(startIndex, startIndex + postsPerPage);

  const tastyRecipes = recipes.slice(0, 3);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Article</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="max-w-xl mx-auto flex items-center bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <input
            type="text"
            placeholder="Search article, news or recipe..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-6 py-3.5 outline-none text-sm bg-transparent"
          />
          <button className="bg-black text-white px-8 py-3.5 rounded-xl text-sm font-medium m-1 hover:bg-gray-800 transition shrink-0">
            Search
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-[65%] space-y-10">
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="flex flex-col sm:flex-row gap-6 group"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full sm:w-64 h-48 sm:h-44 object-cover rounded-2xl flex-shrink-0 group-hover:opacity-90 transition"
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={post.authorImg}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium text-gray-900">
                        {post.author}
                      </span>
                      <span className="text-gray-300">|</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-500 py-16">No articles found.</p>
            )}
          </div>

          <div className="lg:w-[35%]">
            <h3 className="font-bold text-lg mb-6">Tasty Recipes</h3>
            <div className="space-y-5 mb-10">
              {tastyRecipes.map((r) => (
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
                    <p className="text-xs text-gray-500 mt-1">By {r.author}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="rounded-3xl overflow-hidden">
              <img
                src={AdsImg}
                alt="Don't forget to eat healthy food"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex justify-center items-center gap-2 flex-wrap">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition ${
                page === currentPage
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-black hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}

          <span className="w-10 h-10 flex items-center justify-center text-gray-400 text-sm">
            ...
          </span>

          <button
            onClick={() => goToPage(currentPage + 1)}
            className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 hover:bg-black hover:text-white flex items-center justify-center text-sm font-medium transition"
          >
            ›
          </button>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Blog;