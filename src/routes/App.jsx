import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@containers/Layout";
import NotFound from "../pages/NotFound";
import Home from "@pages/Home";
import MyCV from "@pages/MyCV";
import Settings from "@pages/Settings";
import '@styles/global_styles.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="MyCV" element={ <MyCV /> } />
          <Route path="Settings" element={ <Settings /> } />

          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
