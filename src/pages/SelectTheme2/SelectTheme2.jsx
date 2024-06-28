import { useState } from "react";
import themeImg1 from "../../assets/images/theme2-img1.png";
import themeImg2 from "../../assets/images/theme2-img2.png";
import themeImg3 from "../../assets/images/theme2-img3.png";
import themeImg4 from "../../assets/images/theme2-img4.png";
import themeImg5 from "../../assets/images/theme2-img5.png";
import CategorySelector from "../../components/CategorySelector/CategorySelector";
import "./SelectTheme2.scss";
import QuestionHeader from "../../components/QuestionHeader/QuestionHeader";
import routes from "../../utils/routes";
import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";

export default function SelectTheme2() {
  const images = [
    { image: themeImg1, description: "Star Wars" },
    { image: themeImg2, description: "Disney" },
    { image: themeImg3, description: "Art & Music" },
    { image: themeImg4, description: "Video Games" },
    { image: themeImg5, description: "Movies & TV" },
  ];

  const body = (
    <CategorySelector
      images={images}
      buttonText={"Next question"}
      buttonLink={routes.model}
    />
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
        BackLink={routes.theme}
        NextLink={routes.model}
        showBack={true}
        showNext={true}
        MiddleText={middleText}
      />
      <GlobalBackground body={body} fullHeight={true} />;
    </>
  );
}
