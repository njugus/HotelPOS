import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Typography } from "@mui/material";
import { Home, Receipt, BarChart, Settings, ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom"

export default function Sidebar() {
  const [openAnalytics, setOpenAnalytics] = useState(true);

  const handleAnalyticsClick = () => {
    setOpenAnalytics(prev => !prev);
  };

  return (
    <div style={{ background: "#D5E8D4", width: "250px", height: "100vh", padding: "1rem" }}>
      <List>
        {/* Home */}
        <ListItemButton component = { Link } to = "/home">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        {/* Sales Entry */}
        <ListItemButton component = { Link } to = "/sales-entry">
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
            <ListItemButton component = { Link } to = "analytics/overview">
              <ListItemText primary="Overview" />
            </ListItemButton>
            <ListItemButton component = { Link } to = "analytics/by-item">
              <ListItemText primary="Sales by Item" />
            </ListItemButton>
            <ListItemButton component = { Link } to = "analytics/over-time">
              <ListItemText primary="Sales Over Time" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Settings */}
        <ListItemButton sx={{ mt: 2 }} component = { Link } to = "settings">
          <ListItemIcon><Settings /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </div>
  );
}
