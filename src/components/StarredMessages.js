import React from "react";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { CaretLeft } from "phosphor-react";
// custom components
import { SimpleBarStyle } from "./Scrollbar";
import Message from "./Conversation/Message";

// redux
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/app";

const StarredMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: "320px", height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* Header  */}
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction={"row"}
            alignItems={"center"}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Starred Messages</Typography>
          </Stack>
        </Box>
        <Box sx={{ height: "100%", position: "relative", flexGrow: 1 }}>
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
            <Stack p={3} spacing={3}>
              <Message />
            </Stack>
          </SimpleBarStyle>
        </Box>
      </Stack>
    </Box>
  );
};

export default StarredMessages;
