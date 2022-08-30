import * as React from "react";
import AboutSection from "./bodyContent/about/AboutSection";
import { ProjectSection } from "./bodyContent/project/ProjectSection";
import { ArtSection } from "./bodyContent/art/ArtSection";
import { ContactSection } from "./bodyContent/contact/ContactSection";

export default function Body() {
  return (
    <>
      <AboutSection />
      <ProjectSection />
      {/* <ArtSection /> */}
      <ContactSection />
    </>
  );
}
