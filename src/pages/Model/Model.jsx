import { useState } from "react";
import themeImg1 from "../../assets/images/model-img1.png";
import themeImg2 from "../../assets/images/model-img2.png";
import themeImg3 from "../../assets/images/model-img3.png";
import CategorySelector from "../../components/CategorySelector/CategorySelector";
import "./Model.scss";
import QuestionHeader from "../../components/QuestionHeader/QuestionHeader";
import routes from "../../utils/routes";
import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";

export default function Model() {
  const images = [
    { image: themeImg1, description: "Build" },
    { image: themeImg2, description: "Play" },
    { image: themeImg3, description: "Decorate" },
  ];

  const body = (
    <>
      <CategorySelector
        images={images}
        buttonText={"Finish"}
        buttonLink={routes.complete}
      />
    </>
  );

  const middleText = (
    <div className="selecttheme__header">
      <p className="selecttheme__description--blank">loremipsum</p>
      <h2 className="selecttheme__title">What do you like most!</h2>
    </div>
  );

  return (
    <>
      <QuestionHeader
        BackLink={routes.theme2}
        NextLink={routes.complete}
        showNext={true}
        showBack={true}
        MiddleText={middleText}
      />
      <GlobalBackground body={body} fullHeight={true} />;
    </>
  );
}
