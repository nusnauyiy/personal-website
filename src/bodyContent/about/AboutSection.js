import BodySection from "../BodySection";
import { EducationCard } from "./EducationCard";
import { ExperienceCard } from "./ExperienceCard";
import { SkillsCard } from "./SkillsCard";
import education from "./../../data/education.json"
import experience from "./../../data/experience.json"
import skills from "./../../data/skill.json"
import undraw_dev from "./../../img/undraw/undraw_dev.svg";
import undraw_education from "./../../img/undraw/undraw_education.svg";
import undraw_job_offers from "./../../img/undraw/undraw_job_offers.svg";
import undraw_researching from "./../../img/undraw/undraw_researching.svg";
import { Typography } from "@mui/material";

export default function AboutSection() {
  return (
    <BodySection header={"About Me"} maxWidth="md">
      <Typography style={{padding: "10%"}} variant="subtitle1"> from a City of Kapok, raised in the Windy City, and currently exploring Raincouver </Typography>
      <EducationCard data={education} image={undraw_education}/>
      <ExperienceCard data={experience.software} image={undraw_job_offers} flipped={true}/>
      <ExperienceCard data={experience.academia} image={undraw_researching}/>
      <SkillsCard data={skills} image={undraw_dev} flipped={true} />
    </BodySection>
  );
}
