import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import MyCV from "@pages/MyCV";
import '@styles/global_styles.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="MyCV" element={<MyCV />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
