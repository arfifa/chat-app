import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
// custom component
import Chats from "./Chats";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
// redux
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Chats  */}
      <Chats />

      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        {/* Conversation  */}
        <Conversation />
      </Box>
      {/* Contact  */}
      {sidebar.open && <Contact />}
    </Stack>
  );
};

export default GeneralApp;
