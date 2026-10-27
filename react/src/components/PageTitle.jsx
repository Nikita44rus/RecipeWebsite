import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles = {
  "/": "Home",
  "/recipes": "Recipes",
  "/favorites": "Favorites",
  "/blog": "Blog",
  "/contact": "Contact",
  "/about": "About us",
};

const PageTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let page = titles[pathname];

    if (!page) {
      if (pathname.startsWith("/recipe/")) page = "Recipe";
      else if (pathname.startsWith("/blog/")) page = "Blog Post";
      else page = "Foodieland";
    }

    document.title =
      page === "Foodieland" ? "Foodieland" : `Foodieland | ${page}`;
  }, [pathname]);

  return null;
};

export default PageTitle;