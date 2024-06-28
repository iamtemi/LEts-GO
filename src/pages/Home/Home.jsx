import { Link } from "react-router-dom";
import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";
import "./Home.scss";
import routes from "../../utils/routes";
import home1 from "../../assets/images/home1.png";
import home2 from "../../assets/images/home2.png";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__container">
          <h1 className="hero__text">
            <span className="hero__text--var1">Looking </span>
            <span className="hero__text--var2">for </span>
            <span className="hero__text--var3">the </span>
            <span className="hero__text--var4">perfect </span>
            <span className="hero__text--var5">gift?</span>
          </h1>
          <Link to={routes.selectAge} className="hero__button">
            Launch the Gift Finder
          </Link>
        </div>
      </div>
      <div>
        <img src={home1} alt="Home" className="hero__cards" />
      </div>
      <div>
        <img src={home2} alt="Home" className="hero__cards" />
      </div>
    </section>
  );
}
