import { DetailCard } from "./DetailCard";
import { Typography } from "@mui/material";

export const ExperienceCard = (props) => {
  const { data, image, flipped } = props;
  return (
    <DetailCard image={image} flipped={flipped}>
      <ul style={{ textAlign: "left" }}>
        {data.map((exp) => (
          <li key={exp.title + exp.organization}>
            <Typography variant='subtitle2'>
              <b>{exp.title} at {exp.organization}</b> ({exp.startDate} - {exp.endDate})
            </Typography>
          </li>
        ))}
      </ul>
    </DetailCard>
  );
};
