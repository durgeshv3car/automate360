import React from "react";
import { Header50 } from "./components/Header50";
import { Layout102 } from "./components/Layout102";
import { Layout238 } from "./components/Layout238";
import { Navbar } from "../CommonComponent/Navbar";
import { Footer } from "../CommonComponent/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header50 />
      <Layout102 />
      <Layout238 />
      <Footer />
    </div>
  );
}
