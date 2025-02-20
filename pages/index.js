import { useEffect, useState } from "react";
import { fetchNews } from "../utils/fetchNews";
import NewsCard from "../components/NewsCard";
import Loader from "../components/Loader";  
import "./index.css";

const categories = ["general", "business", "technology", "sports", "entertainment"];

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("general");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchNews(`/top-headlines?country=us&category=${category}&q=${search}&page=${page}`).then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, [category, search, page]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen main">
      <h1 className="text-3xl font-bold mt-10 center text-gray-900 pt-20">Top Headlines</h1>

      
      <div className="flex space-x-4 my-4">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)} className={`btn ${category === cat ? "active" : ""}`}>
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      
      <input
        type="text"
        placeholder="Search news..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box my-4"
      />

     
      {loading ? (
        <Loader />
      ) : articles.length > 0 ? (
        articles.map((article, idx) => <NewsCard key={idx} article={article} />)
      ) : (
        <p className="text-red-500 font-bold mt-4">No articles found</p>
      )}
    </div>
  );
};

export default Home;