"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  Input,
  Label,
} from "@relume_io/relume-ui";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact6() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_zuu94z8",
        "template_1vfcaej",
        formData,
        "_3y9a6X1miMuSD9OB"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ firstName: "", lastName: "", email: "", phone: "" });
        },
        (error) => {
          alert("An error occurred, please try again later.");
        }
      );
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 border-t-2 border-black-300">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4 text-left">Connect</p>
            <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl text-left">
              Contact us
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 py-2">
            <div className="flex items-center gap-4">
              <BiEnvelope className="size-6 flex-none" />
              <p>
                <a href="mailto:contact@automate360.io">contact@automate360.io</a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <BiPhone className="size-6 flex-none" />
              <p>
                <a href="tel:+919650278626">+91 96502 78626</a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <BiMap className="size-6 flex-none" />
              <p className="text-left">536, 5th Floor, JMD MEGAPOLIS, Sector 48, Gurugram, Haryana 122018</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full mx-auto space-y-8 p-6 bg-gray-200 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="flex flex-col">
              <Label htmlFor="firstName" className="text-sm font-medium mb-1 text-left">
                First Name
              </Label>
              <Input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="rounded-md p-4"
                required
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="lastName" className="text-sm font-medium mb-1 text-left">
                Last Name
              </Label>
              <Input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="rounded-md p-4"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <Label htmlFor="email" className="text-sm font-medium mb-1 text-left">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-md p-4"
                required
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="phone" className="text-sm font-medium mb-1 text-left">
                Phone Number
              </Label>
              <Input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="rounded-md p-4"
                required
              />
            </div>
          </div>

          <div className="flex justify-end w-full">
            <Button className="w-full rounded-md bg-blue-700 border-none text-white" type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
}