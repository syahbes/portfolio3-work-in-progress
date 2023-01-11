import { Button, 
  //Paper,
  Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MyLogo from "./MyLogo";
import { Link } from "react-router-dom";

// const DemoText = () => {
//   return (
//     <Paper elevation={3} sx={{ maxWidth: 345, p: 3 }}>
//       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
//       explicabo, quis, nihil commodi quas obcaecati non, laborum voluptas
//       adipisci harum voluptate sed accusantium eos. Perferendis rerum quasi
//       nostrum officia! Adipisci.
//     </Paper>
//   );
// };

const Home = () => {
  return (
    <Box sx={{ height: "100%" }}>
      <Box
        className="bg"
        sx={{
          color: "text.secondary",
          p: 5,
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Hi, I'm
        </Typography>
        <MyLogo />
        <Typography variant="h5" mt={3} gutterBottom>
          Front End Web Developer
        </Typography>
        <Box sx={{ mt: 5 }}>
          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            to={`/portfolio`}
          >
            Watch Portfolio
          </Button>
          <Button
            sx={{ ml: 3 }}
            color="secondary"
            variant="contained"
            component={Link}
            to={"/contact"}
          >
            Contact me
          </Button>
        </Box>
      </Box>

     {/* placeholder
     <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          backgroundColor: "background.default",
          minHeight: "300px",
          padding: 5,
        }}
      >
        <DemoText /> <DemoText />
        <DemoText />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          backgroundColor: "background.paper",
          minHeight: "300px",
          padding: 5,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Some Text here
        </Typography>
        <Typography variant="body" gutterBottom>
          more Text here
        </Typography>
        <Typography variant="body" gutterBottom>
          maybe a photo
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          backgroundColor: "background.default",
          minHeight: "300px",
          padding: 5,
        }}
      >
        <Paper elevation={3} sx={{ maxWidth: 345, p: 3, borderRadius: "25px" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          dicta soluta sit hic porro ab praesentium, modi quaerat. Sit tenetur
          dolorem earum fuga nesciunt repellendus quidem, adipisci inventore
          asperiores veniam?
        </Paper>
      </Box>
     for content */}
    </Box>
  );
};

export default Home;
