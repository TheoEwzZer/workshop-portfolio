"use client";

import React, { useState } from "react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Cooking</li>
        <li>Good shoot</li>
        <li>Good team player</li>
        <li>Good Rizz</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Epitech Marseille</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>PIX</li>
        <li>TEPITECH (200/900)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white text-base md:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <button onClick={() => handleTabChange("skills")}>
              <p className={`mr-3 font-semibold text-[#ADB7BE] hover:text-white`}>
                Skills
              </p>
            </button>
            <button onClick={() => handleTabChange("education")}>
              <p className={`mr-3 font-semibold text-[#ADB7BE] hover:text-white`}>
                Education
              </p>
            </button>
            <button onClick={() => handleTabChange("certifications")}>
              <p className={`mr-3 font-semibold text-[#ADB7BE] hover:text-white`}>
                Certifications
              </p>
            </button>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
