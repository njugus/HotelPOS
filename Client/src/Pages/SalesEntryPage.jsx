import { Box } from "@mui/material";
import Sidebar from "../Components/SideBar";
import SalesEntryForm from "../Components/SalesEntryForm";

export default function SalesEntryPage() {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flexGrow={1} bgcolor="white">
        <SalesEntryForm />
      </Box>
    </Box>
  );
}
