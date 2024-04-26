import "./Footer.css";
import youtube_icons from "../../assets/youtube_icon.png";
import twitter_icons from "../../assets/twitter_icon.png";
import instagram_icons from "../../assets/instagram_icon.png";
import facebook_icons from "../../assets/facebook_icon.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={youtube_icons} alt="" />
        <img src={twitter_icons} alt="" />
        <img src={facebook_icons} alt="" />
        <img src={instagram_icons} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help centre</li>
        <li>Gift cards</li>
        <li>Media centre</li>
        <li>Invester relations</li>
        <li>Jobs</li>
        <li>Term of Use</li>
        <li>cookie perferences</li>
        <li>corporate information</li>
        <li>contact us</li>
      </ul>
      <p className="copy-right-text">&copy; 1997-2024 Netflix,Inc</p>
    </div>
  );
}

export default Footer;
