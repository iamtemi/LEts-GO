import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";
import "./Home.scss";

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

      <button type="button" className="headline__button">
        Launch the Gift Finder
      </button>
    </div>
  );

  return <GlobalBackground body={body} />;
}
