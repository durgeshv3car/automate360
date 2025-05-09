import React from "react";
import { Header1 } from "./components/Header1";
import { Layout89 } from "./components/Layout89";
import { Layout1 } from "./components/Layout1";
import { Layout84 } from "./components/Layout84";
import { Layout6 } from "./components/Layout6";
import { Layout194 } from "./components/Layout194";
import { Cta13 } from "./components/Cta13";
import { Navbar } from "../CommonComponent/Navbar";
import { Footer } from "../CommonComponent/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header1 />
      <Layout89 />
      <Layout1 />
      <Layout84 />
      <Layout6 />
      <Layout194 />
      <Cta13 />
      <Footer />
    </div>
  );
}
