import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import { MagnifyingGlass } from "phosphor-react";
// custom components
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { CallElement } from "../../components/CallElement";
import { SimpleBarStyle } from "../../components/Scrollbar";
// data const
import { MemberList } from "../../data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
      scroll="body"
      PaperProps={{
        sx: {
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "#f8faff"
              : theme.palette.background.neutral,
          p: 1,
        },
      }}
    >
      {/* Title  */}
      <DialogTitle sx={{ mb: 3 }}>Start Call</DialogTitle>
      {/* Content  */}
      <DialogContent>
        <Stack spacing={4}>
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
          <SimpleBarStyle
            style={{ minHeight: "50vh" }}
            timeout={500}
            clickOnTrack={false}
          >
            <Stack spacing={2}>
              {/* Call List  */}
              {MemberList.map((el) => (
                <CallElement key={el.id} {...el} />
              ))}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default StartCall;
