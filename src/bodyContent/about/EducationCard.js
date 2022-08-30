import { Typography } from "@mui/material";
import { DetailCard } from "./DetailCard";

export const EducationCard = (props) => {
  const { data, image } = props;
  return (
    <DetailCard image={image}>
      <ul style={{ textAlign: "left" }}>
        {data.degrees.map((d) =>
          d.graduated ? (
            <li key={d.degree}>
              <Typography variant='subtitle2'>
                <b>
                  earned {d.degree} at {d.institution} in {d.graduation}
                </b>
              </Typography>
            </li>
          ) : (
            <li key={d.degree}>
              <Typography variant='subtitle2'>
                <b>
                  pursuing {d.degree} at {d.institution} until {d.graduation}
                </b>
              </Typography>
            </li>
          )
        )}
      </ul>
    </DetailCard>
  );
};
