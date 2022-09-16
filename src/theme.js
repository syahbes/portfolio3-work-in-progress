import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // typography: {     button: {       textTransform: 'none',     }   },
  
    palette: {
      mode: "light",
      background: {
        default: "#f6f9fd", //page background light greay
        paper: "#fff", //cards bg (WHITE)
      },
      text: {
        primary: "#000", //BLACK
        secondary: "#cdd2d6" //Whiteish       
      },
      primary: {
        main: "#1a73e8", //Google Blue
        
      },
       secondary: {
         main: "#F07DEA", //Pastel Pinkish
       },
    },
  });
  
  export default theme;