import React from "react";
import { Header50 } from "./components/Header50";
import { Layout10 } from "./components/Layout10";
import { Layout195 } from "./components/Layout195";
import { Cta3 } from "./components/Cta3";
import { Navbar } from "../CommonComponent/Navbar";
import { Footer } from "../CommonComponent/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header50 />
      <Layout10 />
      <Layout195 />
      <Cta3 />
      <Footer />
    </div>
  );
}
