import React from "react";
import { MainPage } from "./MainPage";
import { MyGallery } from "./MyGallery";
import ExperienceSection from "./ExperienceSection";
import { BlogSectionInHome } from "./BlogSectionInHome";
import { EmergencySection } from "./EmergencySection";
import { DepartmentsSection } from "./DepartmentsSection";
import { WhyHealTripSection } from "./WhyHealTripSection";

export default function Home() {
  return (
    <div style={{marginTop:"59px"}}>
      <MainPage/>
      <DepartmentsSection></DepartmentsSection>
      <EmergencySection></EmergencySection>
      <MyGallery/>
      <WhyHealTripSection></WhyHealTripSection>
      <ExperienceSection></ExperienceSection>
      <BlogSectionInHome></BlogSectionInHome>
    </div>
  );
}
