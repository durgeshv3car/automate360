import React from "react";
import { Header50 } from "./components/Header50";
import { Layout4 } from "./components/Layout4";
import { Layout237 } from "./components/Layout237";
import { Layout6 } from "./components/Layout6";
import { Navbar } from "../CommonComponent/Navbar";
import { Footer } from "../CommonComponent/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header50 />
      <Layout4 />
      <Layout237 />
      <Layout6 />
      <Footer />
    </div>
  );
}
