/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "./Titlecards.css";
import { Link } from "react-router-dom";
// import cards_data from "../../assets/cards/Cards_data";
// eslint-disable-next-line no-unused-vars
function Titlecards({ title, category }) {
  const cardsRef = useRef(null);
  const [apiData, setApiData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzQ4N2ExNmFlMWQ3MDkwNTVjNWM0ZDk0N2ZkZDdlMCIsInN1YiI6IjY2MmJjMjE2Y2FlNjMyMDEyMDUyOTY1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ijB_KAX468ZBw30MBp3cQtiRZBfLJMDIPj3Dq5GHqV0",
    },
  };

  function handleWheel(e) {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, i) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={i}>
              <img
                src={`https:image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Titlecards;
