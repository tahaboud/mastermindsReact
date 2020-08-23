import React from "react";
import Header from "./header";
import Footer from "./footer";
import Treasure from "./treasure";
import "../../../static/frontend/css/header.css";

export default function Courses() {
  return (
    <div className="CoursesPage">
      <Header />
      <Treasure />
      <Footer />
    </div>
  );
}
