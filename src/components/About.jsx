import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      sx={{
        p: 5,
        alignItems: "left",
        justifyContent: "left",
        maxWidth: "1400px",
      }}
    >
      <Paper sx={{ p: 5 }}>
        <Typography variant="h3">About</Typography>
        <p>“Todo posible, nada seguro” (meaning “anything´s possible, nothing´s
        safe/secure”) was one of the many sayings I picked up in South America
        during my long trip before starting my life as an adult.
        </p><p>
        Throughout my life and now with this new chapter in my life, I have lived by this
        sentence.</p>
        <p>
         My goal is to get a job as a Front End Developer</p>
        <p>My first
        website was built using HTML code and FTP to upload data in high school.
        I enjoyed it and found it natural. <br/>During vacations, I enjoyed writing
        mIRC scripts.</p>
        <p>Having worked in high-tech sales for several years, I know
        how this industry operates I began learning HTML CSS Java Script React
        JS again in 2022 through freecodecamp, Scrimba, and other online
        resources I really enjoyed it, and you can see some of my web apps in my
        portfolio.</p>
        <p>I am looking forward to my first role as a developer</p>
      </Paper>
    </Box>
  );
};

export default About;
