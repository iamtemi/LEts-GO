import { useState } from "react";
import themeImg1 from "../../assets/images/theme-img1.png";
import themeImg2 from "../../assets/images/theme-img2.png";
import themeImg3 from "../../assets/images/theme-img3.png";
import themeImg4 from "../../assets/images/theme-img4.png";
import themeImg5 from "../../assets/images/theme-img5.png";
import themeImg6 from "../../assets/images/theme-img6.png";
import CategorySelector from "../../components/CategorySelector/CategorySelector";
import "./SelectTheme2.scss";
import QuestionHeader from "../../components/QuestionHeader/QuestionHeader";
import routes from "../../utils/routes";

export default function SelectTheme2() {
  const images = [
    themeImg1,
    themeImg2,
    themeImg3,
    themeImg4,
    themeImg5,
    themeImg6,
  ];

  return (
    <>
      <QuestionHeader
        BackLink={routes.parentOrChild}
        NextLink={routes.theme2}
        showNext={true}
      />
      <CategorySelector images={images} />;
    </>
  );
}
