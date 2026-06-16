import { useEffect, useState } from "react";
import { LogOut, Search } from "lucide-react";

import { searchMovies } from "../api/movieApi";

function Dashboard() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("batman");
  const [loading, setLoading] = useState(false);


  const fetchMovies = async () => {
    setLoading(true);

    const data = await searchMovies(search);

    setMovies(data);

    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/";
  };

  return (
    <div className="dashboard">

      <nav className="navbar">
        <h1>CineScope</h1>

        <button onClick={handleLogout}>
          <LogOut size={18} />
          Logout
        </button>
      </nav>

      <section className="hero">
        <h2>Discover Trending Movies</h2>

        <p>
          REST API & GraphQL Integration Dashboard
        </p>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={fetchMovies}>
            <Search size={18} />
          </button>

        </div>

      </section>


      <section className="movies-section">

        {loading ? (
          <h2>Loading...</h2>
        ) : (
          movies.map((movie) => (
            <div className="movie-card" key={movie.imdbID}>

              <img
                src={movie.Poster}
                alt={movie.Title}
                className="movie-image"
              />

              <div className="movie-content">

                <h3>{movie.Title}</h3>

                <p>{movie.Year}</p>

              </div>

            </div>
          ))
        )}

      </section>

    </div>
  );
}

export default Dashboard;