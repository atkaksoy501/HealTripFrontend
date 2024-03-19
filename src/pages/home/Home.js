import React from "react";
import { MainPage } from "./MainPage";
import { MyGallery } from "./MyGallery";
import ExperienceSection from "./ExperienceSection";
import { BlogSectionInHome } from "./BlogSectionInHome";
import { EmergencySection } from "./EmergencySection";
import { DepartmentsSection } from "./DepartmentsSection";

export default function Home() {
  return (
    <div style={{marginTop:"59px"}}>
      <MainPage/>
      <DepartmentsSection></DepartmentsSection>
      <h1>Ömür Baba</h1>
      <h1>Ömür Baba</h1>
      <h1>Ömür Baba</h1>
      <h1>Ömür Baba</h1>
      <MyGallery/>
      <EmergencySection></EmergencySection>
      <ExperienceSection></ExperienceSection>
      <BlogSectionInHome></BlogSectionInHome>
    </div>
  );
}
