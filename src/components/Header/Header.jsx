import "./Header.scss";
import { Link } from "react-router-dom";
import header from "../../assets/images/header.png";
import routes from "../../utils/routes";

export default function Header() {
  return (
    <Link to={routes.home}>
      <img src={header} alt="header" className="header" />
    </Link>
  );
}
