import { useState } from "react";
import themeImg1 from "../../assets/images/theme-img1.png";
import themeImg2 from "../../assets/images/theme-img2.png";
import themeImg3 from "../../assets/images/theme-img3.png";
import themeImg4 from "../../assets/images/theme-img4.png";
import themeImg5 from "../../assets/images/theme-img5.png";
import themeImg6 from "../../assets/images/theme-img6.png";
import CategorySelector from "../../components/CategorySelector/CategorySelector";
import "./SelectTheme.scss";
import QuestionHeader from "../../components/QuestionHeader/QuestionHeader";
import routes from "../../utils/routes";
import GlobalBackground from "../../components/GlobalBackground/GlobalBackground";

export default function SelectTheme() {
  const images = [
    { image: themeImg1, description: "Entertainment" },
    { image: themeImg2, description: "Arts" },
    { image: themeImg3, description: "Fantasy & Heroes" },
    { image: themeImg4, description: "Animals & Plants" },
    { image: themeImg5, description: "Cities" },
    { image: themeImg6, description: "Activities" },
  ];

  const body = (
    <CategorySelector
      images={images}
      buttonText={"Next question"}
      buttonLink={routes.theme2}
    />
  );

  const middleText = (
    <div className="selecttheme__header">
      <h2 className="selecttheme__title">Hello!</h2>
      <p className="selecttheme__desc">What do you like?</p>
    </div>
  );
  return (
    <>
      <QuestionHeader
        BackLink={routes.home}
        NextLink={routes.theme2}
        showBack={true}
        showNext={true}
        MiddleText={middleText}
      />
      <GlobalBackground body={body} fullHeight={true} />;
    </>
  );
}
