import React, { useState } from "react";
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
import { CallLogElement } from "../../components/CallElement";
import StartCall from "../../sections/main/StartCall";
// data const
import { CallList } from "../../data";

const Call = () => {
  const theme = useTheme();

  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
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
              <Typography variant="h5">Call Logs</Typography>
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
                Start Conversation
              </Typography>
              <IconButton
                onClick={() => {
                  setOpenDialog(true);
                }}
              >
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />

            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={2.5}>
                {/* Call Logs  */}
                {CallList.map((el) => (
                  <CallLogElement key={el.id} {...el} />
                ))}
                <CallLogElement />
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Box>

        {/* Right  */}
        {/* // TODO => Reuse Conversation Component  */}
      </Stack>

      {openDialog && (
        <StartCall open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Call;
