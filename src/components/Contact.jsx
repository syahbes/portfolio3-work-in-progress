import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const Contact = () => {
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
        <Typography variant="h3">Contact</Typography>
        <br></br>
        <p>
          You can reach me via email at{" "}
          <a href="mailto:syahbes@gmail.com">syahbes@gmail.com</a>
        </p>
        <p>
          Send me a DM on{" "}
          <a
            href="https://www.linkedin.com/in/shlomi427/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </p>
        <p>
          {" "}
          or visit my github page at{" "}
          <a href="https://github.com/syahbes" target="_blank" rel="noreferrer">
            github
          </a>
        </p>
      </Paper>
    </Box>
  );
};

export default Contact;
