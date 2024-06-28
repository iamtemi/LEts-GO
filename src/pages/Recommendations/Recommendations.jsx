import "./Recommendations.scss";
import recommendation from "../../assets/images/recommendations.png";
import { Link } from "react-router-dom";

export default function Recommendations() {
  return (
    <Link to="/">
      <img
        src={recommendation}
        alt="recommendation"
        className="recommendation"
      />
    </Link>
  );
}
