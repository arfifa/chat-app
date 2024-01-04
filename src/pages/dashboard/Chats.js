import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Button,
  Divider,
  useTheme,
} from "@mui/material";
import {
  ArchiveBox,
  CircleDashed,
  MagnifyingGlass,
  Users,
} from "phosphor-react";
// custom component
import { SimpleBarStyle } from "../../components/Scrollbar";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import ChatElement from "../../components/ChatElement";
import Friends from "../../sections/main/Friends";
// utils
import { socket } from "../../socket";
// redux
import { useSelector } from "react-redux";

const user_id = window.localStorage.getItem("user_id");

const Chats = () => {
  const theme = useTheme();

  const { conversations } = useSelector(
    (state) => state.conversation.direct_chat
  );

  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    socket.emit("get_direct_conversations", { user_id }, (data) => {
      // data => liste of conversations
    });
  }, []);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: 320,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#f8faff"
              : theme.palette.background.default,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="h5">Chats</Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <IconButton onClick={() => handleOpenDialog()}>
                <Users />
              </IconButton>
              <IconButton>
                <CircleDashed />
              </IconButton>
            </Stack>
          </Stack>
          <Stack>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Stack>
          <Stack spacing={1}>
            <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
              <ArchiveBox size={24} />
              <Button>Archive</Button>
            </Stack>
            <Divider />
          </Stack>
          <Stack direction={"column"} sx={{ flexGrow: 1, height: "100%" }}>
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              {/* <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                  Pinned
                </Typography>
                {ChatList.filter((el) => el.pinned).map((el) => (
                  <ChatElement {...el} />
                ))}
              </Stack> */}
              <Stack mt={3} spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                  All Charts
                </Typography>
                {conversations
                  .filter((el) => !el.pinned)
                  .map((el) => (
                    <ChatElement {...el} />
                  ))}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
      {openDialog && (
        <Friends open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Chats;
