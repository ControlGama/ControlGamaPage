import React from "react";
import { useState } from "react";
import "@styles/containersStyles/settingsContainer.scss";
import { useTranslation } from "react-i18next";

const SettingsContainer = () => {
  const [languageField, setlanguageField] = useState("");
  const { t, i18n, ready } = useTranslation("Settings");

  if (!ready) return "";

  const handleClick = () => {
    switch (languageField) {
      case "es":
        i18n.changeLanguage(languageField);

        break;
      case "en":
        i18n.changeLanguage(languageField);

        break;
      default:
        alert("Idioma no permitido");
    }
  };

  return (
    <div className="settingsContainer">
      <form className="settingsForm">
        <div className="settingsRow">
          <label htmlFor="languageField">{t("language")}</label>

          <select
            value={languageField}
            onChange={(e) => setlanguageField(e.target.value)}
          >
            <option value=""></option>
            <option value="en">{t("english")}</option>
            <option value="es">{t("spanish")}</option>
          </select>
        </div>

        <div className="settingsRow">
          <button type="button" onClick={() => handleClick()}>
            {t("btnSave")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsContainer;
