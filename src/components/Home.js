import React from "react";
import { Button, Typography, Box, Card, CardContent, Avatar } from "@mui/material";
import RegularHoursCard from "./RegularHoursCard";
import { useNavigate } from "react-router-dom";
import ContactInfo from "./ContactInfo";

const Home = ({ regularHours, specialHours }) => {
  const navigate = useNavigate();

  return (
    <Box 
      sx={{ 
        padding: 4, 
        width: '50%', 
        margin: '0 auto', 
        textAlign: 'center', 
        backgroundColor: '#f0f0f0', 
        borderRadius: '8px'
      }}
    >
        {/* Avatar for the image */}
      <Avatar
        alt="Customer Support"
        src="Assignment\customer-support-supply\media\Avatar.jpg" // Replace with your image URL
        sx={{ width: 80, height: 80, margin: "0 auto", marginBottom: 2 }}
      />
        <Typography variant="h3" gutterBottom>
        Questions?
        <Typography>
            Our Customer Service will be opening late today. We apologize for any inconvenience.
        </Typography>
      </Typography>
      <ContactInfo/>
      <Typography variant="h4" gutterBottom>
        Customer Support Hours
      </Typography>

      {/* Regular Hours */}
      <Typography variant="h5" gutterBottom>
        Regular Hours
      </Typography>
      {regularHours.map((hour) => (
        <RegularHoursCard key={hour.id} day={hour.day} openTime={hour.openTime} closeTime={hour.closeTime} />
      ))}

      {/* Special Hours */}
      <Typography variant="h5" color='red' gutterBottom sx={{ marginTop: 4 }}>
        Special Hours
      </Typography >
      {specialHours.length === 0 ? (
        <Typography>No special hours configured.</Typography>
      ) : (
        specialHours.map((hour) => (
          <Card key={hour.id} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="body1" color= 'red'>
                <strong>{hour.date}</strong>: {hour.openTime} - {hour.closeTime || "N/A"} ({hour.message})
              </Typography>
            </CardContent>
          </Card>
        ))
      )}

      {/* Button to Add Special Hours */}
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 4 }}
        onClick={() => navigate("/add-special-hours")}
      >
        Add Special Hours
      </Button>
    </Box>
  );
};

export default Home;
