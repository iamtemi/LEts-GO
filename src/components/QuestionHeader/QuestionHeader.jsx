import "QuestionHeader.scss";
import { Link } from "react-router-dom";

export default function QuestionHeader(BackLink, NextLink) {
  return (
    <div className="questionheader">
      <div className="questionheader__wrapper">
        <Link to={BackLink} className="questionheader__button"></Link>
        <Link to={BackLink} className="questionheader__button"></Link>
      </div>
      <div className="questionheader__wrapper">
        <p className=" questionheader__text">Let's get started!</p>
      </div>
    </div>
  );
}
