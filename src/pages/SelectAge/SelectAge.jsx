import "./SelectAge.scss";
import QuestionHeader from "../../components/QuestionHeader/QuestionHeader";
import minifig from "../../assets/images/minifig-01.png";
import { useState } from "react";
import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";

export default function SelectAge() {
  const [selectedAge, setSelectedAge] = useState(null);

  const ages = ["0 - 2", "3 - 6", "7 - 10", "11 - 17", "18+"];

  const handleAgeClick = (age) => {
    setSelectedAge(age);
  };

  const body = (
    <section className="ageselect">
      <div className="selectage">
        <div className="selectage__content">
          <img src={minifig} alt="minifig" className="selectage__image" />
          <div className="selectage__button-wrapper">
            {ages.map((age) => (
              <button
                key={age}
                className={`selectage__button-age ${
                  selectedAge === age ? "selectage__button-age--active" : ""
                }`}
                onClick={() => handleAgeClick(age)}
              >
                {age}
              </button>
            ))}
          </div>
          <Link
            to={routes.parentOrChild}
            className="button selectage__button-next"
          >
            Next question
          </Link>
        </div>
      </div>
    </section>
  );

  const middleText = (
    <div className="selecttheme__header">
      <h2 className="selecttheme__title">Let's get started</h2>
      <p className="selecttheme__desc">How old are they?</p>
    </div>
  );

  return (
    <>
      <QuestionHeader
        BackLink={routes.home}
        NextLink={routes.parentOrChild}
        showNext={true}
        showBack={true}
        MiddleText={middleText}
      />
      <GlobalBackground body={body} fullHeight={true} />;
    </>
  );
}
