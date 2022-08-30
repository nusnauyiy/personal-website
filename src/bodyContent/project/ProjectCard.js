import { Grid, Link } from "@mui/material";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Chip } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const StylesPaper = styled(Paper)(({ theme }) => ({
  //   ...theme.typography.body2,
  textAlign: "center",
  lineHeight: "40px",
  padding: "3em",
}));

export const ProjectCard = (props) => {
  const defaultElevation = 15;
  const [elevation, setElevation] = useState(defaultElevation);
  const { project } = props;
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <Grid item xs={isMobile ? 12 : 6}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ transition: "all 1s ease-out" }}
      >
        <StylesPaper
          elevation={elevation}
          onMouseOver={() => {
            setElevation(1);
          }}
          onMouseOut={() => setElevation(defaultElevation)}
        >
          {/* this should link to repository */}
          {project.link !== "" ? (
            <Link href={project.link}>
              <Typography variant='h5' paddingBottom='1em'>
                <b>{project.name}</b>
              </Typography>
            </Link>
          ) : (
            <Typography variant='h5' paddingBottom='1em'>
              <b>{project.name}</b>
            </Typography>
          )}
          <img
            width='100%'
            src={require(`./../../img/project/${project.img}`)}
            loading='lazy'
          />
          <Typography paddingY='10px' variant='body1'>
            {project.description}
          </Typography>
          <div>
            {project.techStack.map((techStack) => (
              <Chip label={techStack} />
            ))}
          </div>
        </StylesPaper>
      </motion.div>
    </Grid>
  );
};
