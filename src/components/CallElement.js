import React from "react";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Phone,
  VideoCamera,
} from "phosphor-react";
// custom components
import StyledBadge from "./StyledBadge";

const CallLogElement = ({ img, name, online, incoming, missed }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.paper,
        }}
        p={2}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={img} alt={name} />
              </StyledBadge>
            ) : (
              <Avatar src={img} alt={name} />
            )}

            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
              {/* <Typography variant="caption">{msg}</Typography> */}
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                {incoming ? (
                  <ArrowDownLeft color={missed ? "red" : "green"} />
                ) : (
                  <ArrowUpRight color={missed ? "red" : "green"} />
                )}
                <Typography variant="caption">Yesterday 21:24</Typography>
              </Stack>
            </Stack>
          </Stack>

          <IconButton>
            <Phone color="green" />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};

const CallElement = ({ img, name, online, incoming, missed }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.paper,
        }}
        p={2}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={img} alt={name} />
              </StyledBadge>
            ) : (
              <Avatar src={img} alt={name} />
            )}

            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
              {/* <Typography variant="caption">{msg}</Typography> */}
            </Stack>
          </Stack>

          <Stack direction={"row"} alignItems={"center"} spacing={0.5}>
            <IconButton>
              <Phone color="green" />
            </IconButton>

            <IconButton>
              <VideoCamera color="green" />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export { CallLogElement, CallElement };
