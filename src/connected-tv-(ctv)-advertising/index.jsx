import React from "react";
import { Navbar1 } from "./components/Navbar1";
import { Header50 } from "./components/Header50";
import { Gallery20 } from "./components/Gallery20";
import { Layout1 } from "./components/Layout1";
import { Layout195 } from "./components/Layout195";
import { Layout6 } from "./components/Layout6";
import { Layout240 } from "./components/Layout240";
import { Cta1 } from "./components/Cta1";
import { Footer3 } from "./components/Footer3";
import { Navbar } from "../CommonComponent/Navbar";
import { Footer } from "../CommonComponent/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header50 />
    
      <Layout1 />
      <Layout195 />
      <Layout6 />
      <Layout240 />
      <Cta1 />
      <Footer />
    </div>
  );
}
