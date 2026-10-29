import {
  recipeImages,
  recipeAuthorImg,
  postImages,
  postAuthorImages,
  postContentImages,
} from "../data/imageMaps";

const RECIPES_URL = "/data/recipes.json";
const POSTS_URL = "/data/posts.json";

function withRecipeImages(recipes) {
  return recipes.map((r) => ({
    ...r,
    image: recipeImages[r.id],
    authorImg: recipeAuthorImg,
  }));
}

function withPostImages(posts) {
  return posts.map((p) => ({
    ...p,
    image: postImages[p.id],
    authorImg: postAuthorImages[p.id],
    content: (p.content || []).map((block) =>
      block.type === "image" && postContentImages[p.id]
        ? { ...block, value: postContentImages[p.id] }
        : block
    ),
  }));
}

export async function fetchRecipes() {
  const res = await fetch(RECIPES_URL);
  if (!res.ok) throw new Error("Failed to load recipes");
  const data = await res.json();
  return withRecipeImages(data);
}

export async function fetchRecipeById(id) {
  const recipes = await fetchRecipes();
  return recipes.find((r) => r.id === Number(id)) || recipes[0];
}

export async function fetchPosts() {
  const res = await fetch(POSTS_URL);
  if (!res.ok) throw new Error("Failed to load posts");
  const data = await res.json();
  return withPostImages(data);
}

export async function fetchPostById(id) {
  const posts = await fetchPosts();
  return posts.find((p) => p.id === Number(id)) || posts[0];
}