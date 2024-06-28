import "./QuestionHeader.scss";
import { Link } from "react-router-dom";
import chevronLeft from "../../assets/icons/chevron-left.svg";
import chevronRight from "../../assets/icons/chevron-right.svg";

export default function QuestionHeader({
  BackLink,
  NextLink,
  showBack,
  showNext,
  MiddleText,
}) {
  return (
    <div className="questionheader">
      {showBack ? (
        <div className="questionheader__wrapper">
          <Link to={BackLink} className="questionheader__link">
            <img
              src={chevronLeft}
              alt="Back Icon"
              className="questionheader__link--icon"
            />
            <p className="questionheader__link--text">Back</p>
          </Link>
        </div>
      ) : null}
      {MiddleText ? MiddleText : null}
      {showNext ? (
        <div className="questionheader__wrapper">
          <Link to={NextLink} className="questionheader__link">
            <p className="questionheader__link--text">Skip</p>
            <img
              src={chevronRight}
              alt="Next Icon"
              className="questionheader__link--icon"
            />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
