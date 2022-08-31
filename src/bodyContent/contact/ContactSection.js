import BodySection from "../BodySection";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import contactUs from "./../../img/undraw/undraw_contact_us.svg";
import Grid from "@mui/material/Grid";
import { Button, FormControl, Typography, Link } from "@mui/material";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const ContactLinks = () => {
  return (
    <div>
      <Link style={{ margin: "2%" }} href='https://www.linkedin.com/in/y-suzette-sun/'>
        <LinkedInIcon />
      </Link>
      <Link style={{ margin: "2%" }} href='https://github.com/nusnauyiy'>
        <GitHubIcon />
      </Link>
      <Link style={{ margin: "2%" }} href='mailto:y.suzette.sun@outlook.com'>
        <EmailIcon />
      </Link>
    </div>
  );
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    debugger;
    setSubmitted(true);
  };
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <Grid container spacing={2}>
      <Grid item xs={isMobile ? 12 : 5}>
        {submitted ? (
          <Typography variant='h5'>
            {" "}
            Thank you! You will hear from me soon!
          </Typography>
        ) : (
          <Box
            component='form'
            //   sx={{
            //     "& > :not(style)": { m: 1, width: "25ch" },
            //   }}
            noValidate
            autoComplete='off'
          >
            <FormControl fullWidth='true'>
              <TextField
                color='primary'
                id='form-name'
                label='Name'
                variant='standard'
                required
              />
              <TextField
                color='primary'
                id='form-email'
                label='E-mail'
                variant='standard'
                required
              />
              <TextField
                color='primary'
                id='form-message'
                label='Message'
                variant='standard'
                multiline
              />
              <br />
              <Button variant='contained' onClick={handleSubmit}>
                Submit
              </Button>
            </FormControl>
          </Box>
        )}
      </Grid>
      <Grid item xs={isMobile ? 12 : 7}>
        <img src={contactUs} width='100%' />
      </Grid>
    </Grid>
  );
};

export const ContactSection = () => {
  return (
    <div
      style={{
        paddingBottom: "3em",
        paddingTop: "1em",
      }}
    >
      <BodySection header={"Contact"} maxWidth='md'>
        <ContactForm />
        <br />
        <br />
        <ContactLinks />
      </BodySection>
    </div>
  );
};
