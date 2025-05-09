import React from "react";
import { Header50 } from "./components/Header50";
import { Layout101 } from "./components/Layout101";
import { Layout242 } from "./components/Layout242";
import { Layout6 } from "./components/Layout6";
import { Gallery10 } from "./components/Gallery10";
import { Cta13 } from "./components/Cta13";
import { Footer } from "../CommonComponent/Footer";
import { Navbar } from "../CommonComponent/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header50 />
      <Layout101 />
     
      <Layout242 />
      <Layout6 />
      
      <Cta13 />
      <Footer />
    </div>
  );
}
