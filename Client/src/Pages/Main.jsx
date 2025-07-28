import { Box } from "@mui/material";
import Sidebar from "../Components/SideBar";
import { Outlet } from "react-router-dom";

export default function SalesEntryPage() {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flexGrow={1} bgcolor="white">
      <div style={{ padding: "2rem" }}>
        {/* This is where nested routes (e.g. SalesEntryForm) will render */}
        <Outlet />
      </div>
      </Box>
    </Box>
  );
}
