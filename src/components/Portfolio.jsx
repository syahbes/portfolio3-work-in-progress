import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Cards from "./Cards";

const renderPortfolio = (portfolio) => {
  return (
    <Box mt={3} mb={3}
      sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 2 , justifyContent: "center" , alignItems: "center", maxWidth: "1600px"}}
    >
      {portfolio.map((item, i) => {
        return (
          <Cards
            key={i}
            title={item.title}
            desc={item.desc}
            src={item.src}
            url={item.url}
            cover={item.cover}
          />
        );
      })}
    </Box>
  );
};

function CircularIndeterminate() {
  return (
    <Box sx={{ position: "absolute", left: "47%", top: "47%" }}>
      <CircularProgress />
    </Box>
  );
}


const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPortfolio = async () => {
    setLoading(true);
    try {
      const querySnapshop = await getDocs(collection(db, "portfolio"));
      setPortfolio(querySnapshop.docs.map((doc) => doc.data()));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => getPortfolio(), 1247);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box >
      {loading ? <CircularIndeterminate /> : renderPortfolio(portfolio)}
    </Box>
  );
};


export default Portfolio;


