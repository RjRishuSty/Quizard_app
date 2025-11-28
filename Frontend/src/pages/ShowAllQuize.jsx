import React from "react";
import { useParams } from "react-router-dom";
import { quizeData } from "../objects/quizeData";
import { Box, Typography, Grid } from "@mui/material";
import Cards from "../components/Cards";

const ShowAllQuize = () => {
  const { label } = useParams();

  const filteredData = quizeData.filter((item) => item.type === label);
  console.log("Data", filteredData);

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        fontWeight='900'
        mb={4}
        textTransform="capitalize"
      >
        {label} Quizzes
      </Typography>

      {filteredData.length === 0 ? (
        <Typography variant="body1" sx={{textAlign:'center',py:10}}>No quizzes available.</Typography>
      ) : (
        <Grid container rowSpacing={2.5} columnSpacing={3}>
          {filteredData.map((item) => (
            <Grid key={item.id} size={{xs:12,sm:6,md:4}}>
              <Cards item={item} useIn="ImageSection" />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ShowAllQuize;
