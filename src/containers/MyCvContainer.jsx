import React from "react";
import ExperienceBox from "@components/ExperienceBox";
import EducationBox from "@components/EducationBox";
import ToolsBox from "@components/ToolsBox";
import CoursesBox from "@components/CoursesBox";
import {
  Sap,
  Javascript,
  Php,
  Microsoftsqlserver,
  Html5,
} from "@icons-pack/react-simple-icons";
import { useTranslation } from "react-i18next";
import "@styles/containersStyles/myCvContainer.scss";

const MyCvContainer = () => {
  const { t, i18n, ready } = useTranslation("MyCV");

  if (!ready) return "";

  const headerData = t("headerData", { returnObjects: true });
  const educationData = t("educationData", { returnObjects: true });
  const experienceData = t("experienceData", { returnObjects: true });
  const toolsData = t("toolsData", { returnObjects: true });
  const coursesData = t("coursesData", { returnObjects: true });

  toolsData.forEach((element) => {
    switch (element.icon) {
      case "Sap":
        element.icon = Sap;
        break;
      case "Javascript":
        element.icon = Javascript;
        break;
      case "Php":
        element.icon = Php;
        break;
      case "Microsoftsqlserver":
        element.icon = Microsoftsqlserver;
        break;
      case "Html5":
        element.icon = Html5;
        break;

      default:
        break;
    }
  });

  return (
    <div className="myCvContainer">
      <div className="myCVSection">
        <h2>{t("mainTitle")}</h2>
        <h2>Nahaliel Gamaliel Rios Martinez</h2>
      </div>

      <div className="headerContainer">
        <div className="main-photo-container"></div>
        <div className="headerData">
          {headerData[0]}
          <br />
          <br />
          {headerData[1]}
          <br />
          <br />
          {headerData[2]}
          <br />
          <br />
          {headerData[3]}
        </div>
      </div>

      <div className="myCVSection">
        <h2>🎓🎓 {t("subtitleEducation")} 🎓🎓</h2>
      </div>

      {educationData.map((item, index) => {
        return (
          <EducationBox key={`educationData${item.Key}${index}`} data={item} />
        );
      })}

      <div className="myCVSection">
        <h2>👨‍💼👨‍💼 {t("subtitleExperience")} 👨‍💼👨‍💼</h2>
      </div>

      {experienceData.map((item, index) => {
        return (
          <ExperienceBox
            key={`experienceData${item.Key}${index}`}
            data={item}
          />
        );
      })}

      <div className="myCVSection">
        <h2>🧰🧰 {t("subtitleTools")} 🧰🧰</h2>
      </div>

      <div className="ToolsContainer">
        {toolsData.map((item, index) => {
          return <ToolsBox key={`toolsData${item.Key}${index}`} data={item} />;
        })}
      </div>

      <div className="myCVSection">
        <h2>🔥🔥 {t("subtitleCourses")} 🔥🔥</h2>
      </div>

      {coursesData.map((item, index) => {
        return (
          <CoursesBox key={`coursesData${item.Key}${index}`} data={item} />
        );
      })}
    </div>
  );
};

export default MyCvContainer;
