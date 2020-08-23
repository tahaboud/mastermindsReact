import React from "react";
import Header from "./header";
import Events from "./events";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Team from "./team";
import Welcome from "./welcome";

export default function Home() {
  return (
    <div className="HomePage">
      <Header />
      <Welcome />
      <About />
      <Team />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}
