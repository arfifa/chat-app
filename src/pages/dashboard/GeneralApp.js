import React from "react";
import { Box, Stack, useTheme } from "@mui/material";

// custom component
import Chats from "./Chats";
import Conversation from "../../components/Conversation";

const GeneralApp = () => {
  const theme = useTheme();

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Chats  */}
      <Chats />

      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        {/* Conversation  */}
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
