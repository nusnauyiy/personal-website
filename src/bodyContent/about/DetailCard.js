import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

export const DetailCard = (props) => {
  const { flipped, image, children } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });


  const ImageGrid = () => (
    <Grid item xs={5}>
      <img src={image} width='100%' />
    </Grid>
  );

  const ContentGrid = () => (
    <Grid item xs={7} padding='1em'>
      {children}
    </Grid>
  );

  if (!isMobile) {
    return (
      <span ref={ref}>
        {flipped ? (
          <Grid
            container
            paddingY='3em'
            style={{
              marginLeft: isInView ? "15%" : "0%",
              transition: "all 1s ease-out 0s",
            }}
          >
            <ContentGrid />
            <ImageGrid />
          </Grid>
        ) : (
          <Grid
            container
            paddingY='3em'
            style={{
              marginLeft: isInView ? "-15%" : "-0%",
              transition: "all 2s ease-out 0s",
            }}
          >
            <ImageGrid />
            <ContentGrid />
          </Grid>
        )}
      </span>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{ transition: "all 0.7s ease-in" }}
    >
      <Stack style={{ padding: "10%" }}>
        <ImageGrid />
        <ContentGrid />
      </Stack>
    </motion.div>
  );
};
