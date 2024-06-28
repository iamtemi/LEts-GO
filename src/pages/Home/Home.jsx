import { Link } from "react-router-dom";
import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";
import "./Home.scss";
import routes from "../../utils/routes";

export default function Home() {
  const body = (
    <div className="headline__wrapper">
      <h1 className="headline__text">
        <span className="headline__text--var1">Looking </span>
        <span className="headline__text--var2">for </span>
        <span className="headline__text--var3">the </span>
        <span className="headline__text--var4">perfect </span>
        <span className="headline__text--var5">gift</span>
      </h1>

      <Link to={routes.selectAge} className="headline__button">
        Launch the Gift Finder
      </Link>
    </div>
  );

  return <GlobalBackground body={body} fullHeight={false} />;
}
