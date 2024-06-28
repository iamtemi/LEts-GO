import { Link } from "react-router-dom";
import thankyou from "../../assets/images/thank-you.png";
import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";
import QuestionHeader from "../../components/QuestionHeader/QuestionHeader";
import routes from "../../utils/routes";
import "./FormComplete.scss";

export default function FormComplete() {
  const body = (
    <section className="form-complete">
      <div className="form-complete__container">
        <h1 className="form-complete__title">Thank you!</h1>
        <p>Please hand the device back to mum/dad</p>
        <img src={thankyou} alt="Smiley face" className="form-complete__img" />
      </div>
      <Link to={routes.recommendations} className="form-complete__link">
        In order to see the tailored recommendations we’ve gathered click here
      </Link>
    </section>
  );
  return (
    <>
      <QuestionHeader
        BackLink={routes.home}
        NextLink={routes.recommendations}
        showNext={true}
      />
      <GlobalBackground body={body} fullHeight={true} />;
    </>
  );
}
