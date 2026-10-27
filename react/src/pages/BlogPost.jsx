import { useParams } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import RecipeCard from "../components/RecipeCard";
import { posts } from "../data/posts";
import { recipes } from "../data/recipes";

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id)) || posts[0];
  const relatedRecipes = recipes.slice(0, 4);

  return (
    <div className="bg-white">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center justify-center gap-3 text-sm text-gray-600 mb-8">
          <img
            src={post.authorImg}
            alt={post.author}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-medium text-gray-900">{post.author}</span>
          <span className="text-gray-300">|</span>
          <span>{post.date}</span>
        </div>

        <p className="text-gray-500 text-[15px] max-w-2xl mx-auto leading-relaxed">
          {post.excerpt}
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl"
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-[70%] max-w-3xl">
            {post.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-10 mb-4">
                    {block.value}
                  </h2>
                );
              }
              if (block.type === "image") {
                return (
                  <img
                    key={index}
                    src={block.value}
                    alt=""
                    className="w-full rounded-2xl my-8 object-cover max-h-[400px]"
                  />
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={index}
                    className="bg-gray-50 border-l-4 border-black pl-6 py-5 my-8 text-lg italic text-gray-700 rounded-r-xl"
                  >
                    “{block.value}”
                  </blockquote>
                );
              }
              return (
                <p
                  key={index}
                  className="text-gray-600 leading-relaxed mb-5 text-[15px]"
                >
                  {block.value}
                </p>
              );
            })}
          </div>

          {/* Share sidebar */}
          <div className="lg:w-[30%]">
            <div className="sticky top-28 flex flex-col items-center">
              <p className="text-sm font-semibold uppercase tracking-wide mb-4 text-gray-500 text-center">
                SHARE THIS ON:
              </p>

              <div className="flex flex-col gap-3 items-center">
                <button
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-black hover:text-white transition flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>

                <button
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-black hover:text-white transition flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>

                <button
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-black hover:text-white transition flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Check out the delicious recipe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedRecipes.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPost;