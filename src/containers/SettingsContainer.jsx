import React from "react";
import { useState } from "react";
import "@styles/containersStyles/settingsContainer.scss";
import { useTranslation } from "react-i18next";

const SettingsContainer = () => {
  const [languageField, setlanguageField] = useState("");
  const { t, i18n } = useTranslation();

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
          <label htmlFor="languageField">Idioma: </label>
          <input
            list="languageList"
            name="languageField"
            value={languageField}
            onChange={(e) => setlanguageField(e.target.value)}
          />
          <datalist id="languageList">
            <option label="Ingles" value="en" />
            <option label="Español" value="es" />
          </datalist>
        </div>

        <div className="settingsRow">
          <button type="button" onClick={() => handleClick()}>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsContainer;
