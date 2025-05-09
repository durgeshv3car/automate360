import React from "react";
import { Navbar1 } from "./components/Navbar1";
import { Layout1 } from "./components/Layout1";
import { Contact6 } from "./components/Contact6";
import { Footer3 } from "./components/Footer3";
import { Navbar } from "../CommonComponent/Navbar";
import { Footer } from "../CommonComponent/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Layout1 />
      <Contact6 />
      <Footer />
    </div>
  );
}
