import React from "react";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
// custom component
import SideBar from "./SideBar";

const DashboardLayout = () => {
  return (
    <>
      <Stack direction="row">
        {/* SideBar  */}
        <SideBar />
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
