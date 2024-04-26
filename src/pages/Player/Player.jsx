/* eslint-disable react/no-unknown-property */
import "./Player.css";
import backArrow_icon from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Player() {
  const [apiData, setApiData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzQ4N2ExNmFlMWQ3MDkwNTVjNWM0ZDk0N2ZkZDdlMCIsInN1YiI6IjY2MmJjMjE2Y2FlNjMyMDEyMDUyOTY1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ijB_KAX468ZBw30MBp3cQtiRZBfLJMDIPj3Dq5GHqV0",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="player">
      <img
        src={backArrow_icon}
        alt=""
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameborder="0"
        title="trailer"
        width="90%"
        height="90%"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
