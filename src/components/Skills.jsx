import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const Skills = () => {
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
        <Typography variant="h3">Skills</Typography>
        <p>
          Apart from front end tech skills such as HTML, CSS, JavaScript React
          and more...
        </p>

        <p align="left">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
              width="36"
              height="36"
              alt="JavaScript"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
              width="36"
              height="36"
              alt="HTML5"
            />
          </a>
          <a
            href="https://www.w3.org/TR/CSS/#css"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
              width="36"
              height="36"
              alt="CSS3"
            />
          </a>
          <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
              width="36"
              height="36"
              alt="Sass"
            />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
              width="36"
              height="36"
              alt="React"
            />
          </a>
          <a href="https://mui.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg"
              width="36"
              height="36"
              alt="Material UI"
            />
          </a>
          <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg"
              width="36"
              height="36"
              alt="Redux"
            />
          </a>
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
              width="36"
              height="36"
              alt="Firebase"
            />
          </a>
        </p>
        <p>
          My best skill is my ability to learn new technology quickly I have
          used technology such as:
        </p>
        <p>
          Material UI sass, Firebase, MongoDB. Learning them from scratch has
          been a FUN challenge for me
        </p>
      </Paper>
    </Box>
  );
};

export default Skills;
