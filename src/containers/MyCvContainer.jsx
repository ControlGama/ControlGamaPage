import React from "react";
import ExperienceBox from "@components/ExperienceBox";
import EducationBox from "@components/EducationBox";
import ToolsBox from "@components/ToolsBox";
import "@styles/containersStyles/myCvContainer.scss";

const MyCvContainer = () => {
  const educationData = [
    {
      title: "Centro de Estudios Tecnológicos Industriales y de Servicios #101",
      duration: "2010 - 2013",
      subtitle: "Técnico en Informática",
      description:
        "En 2013 me gradué de esta institución como técnico en informática. Aquí adquirir los principios básicos de la programación. En aquel entonces la escuela usaba para enseñar Visual Basic como lenguaje y Microsoft Access como base de datos, que, aunque no son las herramientas más populares, al menos a mí me sirvieron mucho para aprender.",
    },
    {
      title: "Facultad de Ingeniería Mecánica y Eléctrica",
      duration: "2016 - Actualidad",
      subtitle: "Ingeniero en Tecnología de Software",
      description:
        "Actualmente me encuentro cursando la carrera, con miras a terminarla el próximo año. Durante el periodo de estudios he logrado ampliar el panorama que tenía de la ingeniería de software, además de empatizar y adquirir los valores de la institución.",
    },
  ];

  const experienceData = [
    {
      title: "LinkTech",
      duration: "jun.2013 - nov.2017",
      subtitle: "Consultor de SAP-ABAP",
      description: "Linktech fue la empresa donde inicie mi trayectoria laboral. Durante mi estancia en la empresa participe en una gran cantidad de proyectos y requerimientos de diversos clientes, principalmente como consultor ABAP. Durante el tiempo que trabajé en la empresa tuve la fortuna de ser asesorado por excelentes compañeros con muchos años de experiencia. Todos estos factores me dejaron una gran experiencia y un conocimiento invaluable.",
      projects: [
        {
          key: 'Link',
          proyectName: "Cliente: Nutec",
          rol: "Consultor ABAP",
          description: "Creación de programas Abap. Como reportes, interfases, User Exit siguiendo las mejores prácticas de programación garantizando el buen funcionamiento del programa creando documentación de los programas desarrollados, los cuales se suben a un repositorio. Se realizó control de calidad de los desarrollos realizados por compañeros verificando que se hayan seguido los estándares de programación indicados. Resultados/Logros: Terminar los programas en tiempo y calidad correcta, donde se realiza la documentación de los programas desarrollados (Diseño Técnico, Documentación de pruebas Unitarias). ",
        },
        {
          key: 'Link',
          proyectName: "Cliente: Grupo Harinas Chihuahua ",
          subtitle: "Rol Consultor ABAP ",
          description: "Modificación de formularios estándar Smartforms para adaptarlos a la necesidades del Cliente Resultados/Logros: Terminar los programas en tiempo y calidad correcta, donde se realiza la documentación de los programas desarrollados (Diseño Técnico, Documentación de pruebas Unitarias). ",
        },
      ]
    },
    {
      title: "IDS comercial TI",
      duration: "dic.2017 - ene.2019 ",
      subtitle: "Consultor de SAP-ABAP",
      description: "IDS fue mi siguiente reto profesional, la consultoría me contrato principalmente para apoyar con los requerimientos de ABAP un proyecto con PEPSICO, aunque el proyecto fue breve considero que me dejo un gran aprendizaje sobre todo por la forma tan ordenada de trabajar que tenían.",
      projects:[
        {
          key: 'IDS',
          proyectName: "Cliente: Grupo Harinas Chihuahua ",
          rol: "Consultor ABAP ",
          description: "Modificación de formularios estándar Smartforms para adaptarlos a la necesidades del Cliente Resultados/Logros: Terminar los programas en tiempo y calidad correcta, donde se realiza la documentación de los programas desarrollados (Diseño Técnico, Documentación de pruebas Unitarias). ",
        },
        {
          key: 'IDS',
          proyectName: "Cliente: Grupo Harinas Chihuahua ",
          rol: "Consultor ABAP ",
          description: "Modificación de formularios estándar Smartforms para adaptarlos a la necesidades del Cliente Resultados/Logros: Terminar los programas en tiempo y calidad correcta, donde se realiza la documentación de los programas desarrollados (Diseño Técnico, Documentación de pruebas Unitarias). ",
        },
      ]
    },
    {
      title: "Palmex Alimentos",
      duration: "ene.2019 - Actualidad",
      subtitle: "Especialista en desarrollo",
      description: "Actualmente Palmex es la empresa en donde estoy trabajando, aunque mi principal rol cuando entré a la empresa era dar soporte y mantenimiento a los programas ABAP, poco a poco fui tomando más responsabilidades y empecé a trabajar con más tecnologías que usa la empresa como: PHP, SQL Server, .NET y Tableau.",
      projects:[
        {
          key: 'Palmex',
          proyectName: "Cliente: Grupo Harinas Chihuahua ",
          rol: "Consultor ABAP ",
          description: "Modificación de formularios estándar Smartforms para adaptarlos a la necesidades del Cliente Resultados/Logros: Terminar los programas en tiempo y calidad correcta, donde se realiza la documentación de los programas desarrollados (Diseño Técnico, Documentación de pruebas Unitarias). ",
        },
      ]
    },
  ];


  return (
    <div className="myCvContainer">
      <div className="myCVSection">
        <h2>Desarrollador SAP-ABAP / WEB </h2>
        <h2>Nahaliel Gamaliel Rios Martinez</h2>
      </div>

      <div className="headerContainer">
        <div className="main-photo-container"></div>
        <div className="headerData">
          Desde que egresé de la preparatoria me he dedicado profesionalmente al
          desarrollo de software.
          <br />
          <br />
          He trabajado con una gran variedad de clientes de diferentes giros, lo
          que me ha permitido conocer y adaptarme a los entornos cambiantes de
          la industria.
          <br />
          <br />
          Me gusta trabajar de forma ordenada y organizada con base a objetivos.
          <br />
          <br />
          Creo que la responsabilidad es mi principal virtud.
        </div>
      </div>

      <div className="myCVSection">
        <h2>🎓🎓 Educación 🎓🎓</h2>
      </div>

      <EducationBox data={educationData[0]} />
      <EducationBox data={educationData[1]} />

      <div className="myCVSection">
        <h2>👨‍💼👨‍💼 Experiencia Laboral 👨‍💼👨‍💼</h2>
      </div>

      <ExperienceBox key="abc1" data={experienceData[0]} />
      <ExperienceBox key="abc2" data={experienceData[1]} />
      <ExperienceBox key="abc3" data={experienceData[2]} />

      <div className="myCVSection">
        <h2>🔥🔥 Formacion Continua 🔥🔥</h2>
      </div>
      <ToolsBox></ToolsBox>

      <div className="myCVSection">
        <h2>🧰🧰 Lenguajes y herramientas de trabajo 🧰🧰</h2>
      </div>

      <div className="ToolsContainer">

      </div>
    </div>
  );
};

export default MyCvContainer;
