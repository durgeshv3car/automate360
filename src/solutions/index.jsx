import React from "react";
import { Header50 } from "./components/Header50";
import { Layout192 } from "./components/Layout192";
import { Layout4 } from "./components/Layout4";
import { Layout192_1 } from "./components/Layout192_1";
import { Layout1 } from "./components/Layout1";
import { Layout192_2 } from "./components/Layout192_2";
import { Layout4_1 } from "./components/Layout4_1";
import { Cta3 } from "./components/Cta3";
import { Footer } from "../CommonComponent/Footer";
import { Navbar } from "../CommonComponent/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header50 />
      <Layout192 />
      <Layout4 />
      <Layout192_1 />
      <Layout1 />
      <Layout192_2 />
      <Layout4_1 />
      <Cta3 />
      <Footer />
    </div>
  );
}
