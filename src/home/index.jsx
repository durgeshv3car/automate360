import React from "react";
import { Header30 } from "./components/Header30";
import { Layout201 } from "./components/Layout201";
import { Layout239 } from "./components/Layout239";
import { Layout1 } from "./components/Layout1";
import { Layout237 } from "./components/Layout237";
import { Layout192 } from "./components/Layout192";
import { Layout1_1 } from "./components/Layout1_1";
import { Cta3 } from "./components/Cta3";
import { Footer } from "../CommonComponent/Footer";
import { Navbar } from "../CommonComponent/Navbar";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header30 />
      <Layout201 />
      <Layout239 />
      <Layout1 />
      <Layout237 />
      <Layout192 />
      <Layout1_1 />
      <Cta3 />
      <Footer />
    </div>
  );
}
