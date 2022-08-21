import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import Books from "../pages/Books";
import Home from "../pages/Home";
import Detail from "./../pages/Detail";
const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/book/:id" element={<Detail />} />
    </RouterRoutes>
  );
};

export default Routes;
