import { Link } from "react-router-dom";
import "./ParentOrChild.scss";
import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";
import QuestionHeader from "../../components/QuestionHeader/QuestionHeader";
import routes from "../../utils/routes";

export default function ParentOrChild() {
  const body = (
    <section className="parentorchild">
      <div className="parentorchild__wrapper">
        <div className="parentorchild__child">
          <h2 className="parentorchild__title">Let your kid fill this out!</h2>
          <p className="parentorchild__description">
            <span className="parentorchild__span--desc">
              What better way to gift them what they want, than gifting them
              what they want!
            </span>
            <span className="parentorchild__span--desc">
              They will not be able to see the recommendations unless you choose
              to.
            </span>
          </p>
          <Link to={routes.theme} className="button parentorchild__button">
            Child's Input
          </Link>
        </div>
        <div className="parentorchild__parent">
          <h2 className="parentorchild__title">
            <span className="parentorchild__span">That’s alright,</span>
            <span className="parentorchild__span">
              I’d rather do it myself.
            </span>
          </h2>
          <Link to={routes.comingSoon} className="button parentorchild__button">
            Parent's Input
          </Link>
        </div>
      </div>
    </section>
  );
  return (
    <>
      <QuestionHeader
        BackLink={routes.selectAge}
        NextLink={routes.home}
        showBack={true}
        showNext={false}
      />
      <GlobalBackground body={body} />;
    </>
  );
}
