import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";
import QuestionHeader from "../../components/QuestionHeader/QuestionHeader";
import "./ComingSoon.scss";

export default function ComingSoon() {
  const body = (
    <div className="coming-soon">
      <h1 className="coming-soon__title">Coming soon...</h1>
      <a href="" className="coming-soon__link">
        Shop other products
      </a>
    </div>
  );
  return (
    <>
      <QuestionHeader />
      <GlobalBackground body={body} />;
    </>
  );
}
