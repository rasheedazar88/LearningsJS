
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employees from "../Partials/Employees/Employees";
import Service from "../Partials/Service/Service";
import "./BodyContainer.css";


export default function BodyContainer() {
  return (
    <div className="container-fluid p-4 h-100">
      <Routes>
        <Route  path="/" element={<Service />} />
        <Route  path="/employees" element={<Employees />} />
      </Routes>        

    </div>
  );
}
