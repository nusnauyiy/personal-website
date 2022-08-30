import { Grid } from "@mui/material";
import BodySection from "../BodySection";
import { ProjectCard } from "./ProjectCard";
import projectData from "./../../data/project.json";
import { SUNSET_COLOR_PASTEL_STRING as COLOR } from "../../const/style";
import { useMediaQuery } from "react-responsive";

export const ProjectSection = () => {
  const mobileMax = useMediaQuery({ query: "(max-width: 700px)" });
  const mobileNormal = useMediaQuery({ query: "(min-width: 400px)" });
  return (
    <div
      style={{
        background: `linear-gradient(160deg, #def, ${COLOR.lowlight})`,
        paddingBottom: "3em",
        paddingTop: "1em",
      }}
    >
      <BodySection header={"Project"} maxWidth={(mobileMax && mobileNormal) ? 'sm' : 'lg'}>
        <Grid container spacing={8}>
          {projectData.csProject.map((project) => (
            <ProjectCard project={project} />
          ))}
        </Grid>
      </BodySection>
    </div>
  );
};
