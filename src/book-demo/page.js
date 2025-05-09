"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Navbar } from "../CommonComponent/Navbar";
import { Footer } from "../CommonComponent/Footer";

export default function BookDemoDeelStyle() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    companySize: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_zuu94z8", // replace with your EmailJS service ID
        "template_lqqze5p", // replace with your EmailJS template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNo: formData.phoneNo,
          companySize: formData.companySize,
        },
        "_3y9a6X1miMuSD9OB" // replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Demo booked successfully!");
          setFormData({ firstName: "", lastName: "", phoneNo: "", companySize: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to book demo. Please try again.");
        }
      );
  };

  return (
    <>
      <Navbar />
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Panel */}
        <div className="bg-[#009dfe] text-white px-10 py-10 flex flex-col justify-center">
          <img
            src="/images/Bookdemo.jpg"
            alt="Demo preview"
            className="rounded-xl shadow-lg"
          />
          <p className="text-sm text-white/70 mt-6">
            Used by 15,000+ companies from startups to enterprise
          </p>
        </div>

        {/* Right Panel */}
        <div className="bg-white px-10 py-20 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Get started</h2>
          <p className="text-gray-600 mb-6">
            Schedule a 30-minute product demo with an expert
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="border border-gray-300 rounded-lg px-4 py-3"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="border border-gray-300 rounded-lg px-4 py-3"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              maxLength={10}
              name="phoneNo"
              placeholder="Phone no."
              className="border border-gray-300 rounded-lg px-4 py-3 col-span-2"
              value={formData.phoneNo}
              onChange={handleChange}
              required
            />
            <select
              name="companySize"
              className="border border-gray-300 rounded-lg px-4 py-3 col-span-2"
              value={formData.companySize}
              onChange={handleChange}
              required
            >
              <option value="">Company size</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201-500">201-500</option>
              <option value="500+">500+</option>
            </select>

            <button
              type="submit"
              className="col-span-2 mt-4 bg-[#1B4EFF] text-white py-3 rounded-xl text-base font-medium hover:bg-blue-700 transition-all"
            >
              Book a demo
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            We respect your data. By submitting this form, you agree that we
            will contact you in relation to our products and services. Read our{" "}
            <a href="#" className="underline">
              Privacy policy
            </a>
            .
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}