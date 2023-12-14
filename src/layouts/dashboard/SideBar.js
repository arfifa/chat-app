import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
// custom component
import AntSwitch from "../../components/AntSwitch";

// asset
import Logo from "../../assets/Images/logo.ico";
// Const Data
import { Nav_Buttons } from "../../data";
// Hooks
import useSettings from "../../hooks/useSettings";

const SideBar = () => {
  const theme = useTheme();

  const { onToggleMode } = useSettings();

  const [selected, setSelected] = useState(0);

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        height: "100vh",
        width: 100,
      }}
    >
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ height: "100%" }}
        spacing={3}
      >
        <Stack spacing={4} alignItems={"center"}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            <img src={Logo} alt="Chat App Logo" />
          </Box>
          <Stack
            spacing={3}
            direction={"column"}
            alignItems={"center"}
            sx={{ width: "max-content" }}
          >
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{
                      width: "max-content",
                      color: "#fff",
                    }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                  key={el.index}
                  onClick={() => {
                    setSelected(el.index);
                  }}
                >
                  {el.icon}
                </IconButton>
              )
            )}
            <Divider sx={{ width: "48px" }} />
            {selected === 3 ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton
                  sx={{
                    width: "max-content",
                    color: "#fff",
                  }}
                >
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
                onClick={() => {
                  setSelected(3);
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>
        <Stack spacing={4}>
          <AntSwitch onChange={onToggleMode} defaultChecked />
          <Avatar src={faker.image.avatar()} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
