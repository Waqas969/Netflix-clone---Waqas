import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import Play_icon from "../../assets/play_icon.png";
import Info_icon from "../../assets/info_icon.png";
import Titlecards from "../../components/Titlecards/Titlecards";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="banner-image" className="banner-image" />
        <div className="hero-caption">
          {" "}
          <img src={hero_title} alt="banner-image" className="caption-image" />
          <p>
            Discovering his ties to a secret ancient order,a young man living in
            modern Istanbul embarks on a quest save to save to the city from an
            immortal enemt
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={Play_icon} alt="play-icon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={Info_icon} alt="info-icon" />
              More Info
            </button>
          </div>
          <Titlecards />
        </div>
      </div>
      <div className="more-cards">
        <Titlecards title={"Blockbustors Movies"} category={"top_rated"} />
        <Titlecards title={"Only on Netflix"} category={"popular"} />
        <Titlecards title={"Upcoming"} category={"upcoming"} />
        <Titlecards title={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
