import React from "react";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import { CaretLeft } from "phosphor-react";
import { faker } from "@faker-js/faker";
// custom components
import { SimpleBarStyle } from "./Scrollbar";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";

// redux
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/app";

// data const
import { Shared_docs, Shared_links } from "../data";

const SharedMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>
        <Tabs
          sx={{ px: 2, pt: 2 }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>
        <Box sx={{ height: "100%", position: "relative", flexGrow: 1 }}>
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
            <Stack p={3} spacing={value === 1 ? 1 : 3}>
              {(() => {
                switch (value) {
                  case 0:
                    // Images
                    return (
                      <Grid container spacing={2}>
                        {[0, 1, 2, 3, 4, 5, 6].map((el) => (
                          <Grid item xs={4}>
                            <img
                              src={faker.image.avatar()}
                              alt={faker.name.fullName()}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    );
                  case 1:
                    // Links
                    return Shared_links.map((el) => <LinkMsg el={el} />);
                  case 2:
                    // Docs
                    return Shared_docs.map((el) => <DocMsg el={el} />);

                  default:
                    break;
                }
              })()}
            </Stack>
          </SimpleBarStyle>
        </Box>
      </Stack>
    </Box>
  );
};

export default SharedMessages;
