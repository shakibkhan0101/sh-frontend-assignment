import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddSpecialHours = ({ addSpecialHour }) => {
    const [date, setDate] = useState("");
    const [openTime, setOpenTime] = useState("");
    const [closeTime, setCloseTime] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newSpecialHour = {
            id: Date.now(),
            date,
            openTime: openTime || "Closed",
            closeTime: closeTime || null,
            message,
        };

        addSpecialHour(newSpecialHour);

        // Redirected to home page after submission
        navigate("/");
    };

    return (
        <Box
            sx={{
                padding: 4,
                width: '50%',
                margin: '0 auto', // Centers the box horizontally
                textAlign: 'center' // Centers the content inside the box
            }}
        >
            <Typography variant="h4" gutterBottom>
                Add Changed Schedule
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Date"
                    type="date"
                    fullWidth
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    sx={{ marginBottom: 2 }}
                    InputLabelProps={{ shrink: true }}
                    required
                />
                <TextField
                    label="Open Time"
                    type="time"
                    fullWidth
                    value={openTime}
                    onChange={(e) => setOpenTime(e.target.value)}
                    sx={{ marginBottom: 2 }}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    label="Close Time"
                    type="time"
                    fullWidth
                    value={closeTime}
                    onChange={(e) => setCloseTime(e.target.value)}
                    sx={{ marginBottom: 2 }}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    label="Message"
                    fullWidth
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    sx={{ marginBottom: 2 }}
                    required
                />
                <Button variant="contained" color="primary" type="submit">
                    Publish
                </Button>
            </form>
        </Box>
    );
};

export default AddSpecialHours;
