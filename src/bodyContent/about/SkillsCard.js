import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import { DetailCard } from "./DetailCard";

export const SkillsCard = (props) => {
  const { data, image, flipped } = props;
  return (
    <DetailCard image={image} flipped={flipped}>
      {/* {data.software.map((skill) => (
        <Chip label={skill} />
      ))}
      <br />
      <br />
      {data.others.map((skill) => (
        <Chip label={skill} />
      ))} */}
      {Object.keys(data).map((category) => (
        <div>
          <Typography variant="subtitle1"><b>{category}</b></Typography>
          {data[category].map((skill) => (
            <Chip style={{margin: '0.5%'}} label={skill} />
          ))}
          <br />
          <br />
        </div>
      ))}
    </DetailCard>
  );
};
