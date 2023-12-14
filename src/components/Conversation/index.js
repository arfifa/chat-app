import React from "react";
import { Box, Stack } from "@mui/material";
// Custom Component
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";
import { SimpleBarStyle } from "../Scrollbar";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat Header  */}
      <Header />
      {/* Msg  */}
      <Box width sx={{ flexGrow: 1, height: "100%" }}>
        <SimpleBarStyle timeout={500} clickOnTrack={false}>
          <Message />
        </SimpleBarStyle>
      </Box>
      {/* Chat Footer  */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
