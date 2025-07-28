import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Typography } from "@mui/material";
import { Home, Receipt, BarChart, Settings, ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";

export default function Sidebar() {
  const [openAnalytics, setOpenAnalytics] = useState(true);

  const handleAnalyticsClick = () => {
    setOpenAnalytics(prev => !prev);
  };

  return (
    <div style={{ background: "#D5E8D4", width: "250px", height: "100vh", padding: "1rem" }}>
      <List>
        {/* Home */}
        <ListItemButton>
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        {/* Sales Entry */}
        <ListItemButton>
          <ListItemIcon><Receipt /></ListItemIcon>
          <ListItemText primary="Sales Entry" />
        </ListItemButton>

        {/* Analytics Section */}
        <ListItemButton onClick={handleAnalyticsClick}>
          <ListItemIcon><BarChart /></ListItemIcon>
          <ListItemText primary="Analytics" />
          {openAnalytics ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openAnalytics} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItemButton>
              <ListItemText primary="Overview" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Sales by Item" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Sales Over Time" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Settings */}
        <ListItemButton sx={{ mt: 2 }}>
          <ListItemIcon><Settings /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </div>
  );
}
