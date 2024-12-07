import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const RegularHoursCard = ({ day, openTime, closeTime }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="body1">
          <strong>{day}</strong>: {openTime} - {closeTime}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RegularHoursCard;

