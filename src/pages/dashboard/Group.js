import React from "react";
import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { MagnifyingGlass, Plus } from "phosphor-react";
// custom components
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { SimpleBarStyle } from "../../components/Scrollbar";
import ChatElement from "../../components/ChatElement";
// data const
import { ChatList } from "../../data";

const Group = () => {
  const theme = useTheme();
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Left  */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#f8faff"
                : theme.palette.background.default,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
            <Stack>
              <Typography variant="h5">Group</Typography>
            </Stack>

            <Stack sx={{ width: "100%" }}>
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

            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="subtitle2" component={Link}>
                Create New Group
              </Typography>
              <IconButton>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />

            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={2.5}>
                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  Pinned
                </Typography>
                {/* Chat List  */}
                {ChatList.filter((el) => el.pinned).map((el) => (
                  <ChatElement {...el} />
                ))}
                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  All Groups
                </Typography>
                {/* Chat List  */}
                {ChatList.filter((el) => !el.pinned).map((el) => (
                  <ChatElement {...el} />
                ))}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Box>

        {/* Right  */}
        {/* // TODO => Reuse Conversation Component  */}
      </Stack>
    </>
  );
};

export default Group;
