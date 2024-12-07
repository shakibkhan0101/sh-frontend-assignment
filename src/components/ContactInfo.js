import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SmsIcon from "@mui/icons-material/Sms";
import EmailIcon from "@mui/icons-material/Email";

const ContactInfo = () => {
  return (
    <Box sx={{ backgroundColor: "white", padding: 3,  textAlign: 'center', borderRadius: 2 }}>
        <Stack spacing={2}>
        {/* Call */}
        <Stack direction="row" spacing={2} alignItems="center" alignSelf="center">
          <PhoneIcon sx={{ color: "#909090" }} />
          <Box>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#4f4f4f" }}>
              Call 888-551-7600
            </Typography>
            <Typography variant="body2" sx={{ color: "#757575" }}>
              Available 8am
            </Typography>
          </Box>
        </Stack>

        {/* Text */}
        <Stack direction="row" spacing={2} alignItems="center" alignSelf="center">
          <SmsIcon sx={{ color: "#909090" }} />
          <Box>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#4f4f4f" }}>
              Text 888-551-7600
            </Typography>
            <Typography variant="body2" sx={{ color: "#757575" }}>
              Available 8am
            </Typography>
          </Box>
        </Stack>

        {/* Live Chat */}
        <Stack direction="row" spacing={2} alignItems="center" alignSelf="center">
          <ChatBubbleOutlineIcon sx={{ color: "#909090" }} />
          <Box>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#4f4f4f" }}>
              Live Chat
            </Typography>
            <Typography variant="body2" sx={{ color: "#757575" }}>
              Available 8am
            </Typography>
          </Box>
        </Stack>

        {/* Email */}
        <Stack direction="row" spacing={2} alignItems="center" alignSelf="center">
          <EmailIcon sx={{ color: "#909090" }} />
          <Box>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#4f4f4f" }}>
              Email
            </Typography>
            <Typography variant="body2" sx={{ color: "#757575" }}>
              Response by Sun
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ContactInfo;
