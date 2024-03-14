import React from "react";
import { MainPage } from "./MainPage";
import { MyGallery } from "./MyGallery";
import ExperienceSection from "./ExperienceSection";
import { BlogSectionInHome } from "./BlogSectionInHome";

export default function Home() {
  return (
    <div>
      <MainPage />
      <MyGallery/>
      <h1>Ömür Baba</h1>
      <h1>Ömür Baba</h1>
      <h1>Ömür Baba</h1>
      <ExperienceSection></ExperienceSection>
      <BlogSectionInHome></BlogSectionInHome>
    </div>
  );
}
