import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Receipt, BarChart, Settings } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div style={{ background: "#D5E8D4", width: "250px", height: "100vh", padding: "1rem" }}>
      <List>
        <ListItemButton>
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon><Receipt /></ListItemIcon>
          <ListItemText primary="Sales Entry" />
        </ListItemButton>

        <ListItemText primary="Analytics" sx={{ pl: 4, fontWeight: "bold", mt: 2 }} />
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemText primary="Overview" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemText primary="Sales by Item" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemText primary="Sales Over Time" />
        </ListItemButton>

        <ListItemButton sx={{ mt: 3 }}>
          <ListItemIcon><Settings /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </div>
  );
}
