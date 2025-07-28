import { Box, Typography, MenuItem, TextField, Button } from "@mui/material";
import { useState } from "react";

const menuItems = [
  { name: "Chips", price: 50 },
  { name: "Soda", price: 30 },
  { name: "Chicken", price: 120 },
];

export default function SalesEntryForm() {
  const [item, setItem] = useState("");
  const [qty, setQty] = useState(1);
  const selectedItem = menuItems.find(i => i.name === item);
  const subtotal = selectedItem ? selectedItem.price * qty : 0;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" mb={2}>Sales Entry</Typography>

      <TextField
        label="Menu Item"
        select
        fullWidth
        value={item}
        onChange={(e) => setItem(e.target.value)}
        margin="normal"
      >
        {menuItems.map((item, i) => (
          <MenuItem key={i} value={item.name}>{item.name}</MenuItem>
        ))}
      </TextField>

      <TextField
        label="Quantity"
        type="number"
        fullWidth
        margin="normal"
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
      />

      <Box mt={2} mb={2}>
        <Typography fontWeight="bold">Subtotal</Typography>
        <Typography>{subtotal.toFixed(2)}</Typography>
      </Box>

      <Button variant="contained" fullWidth sx={{ backgroundColor: "#314E26" }}>
        Add Sale
      </Button>
    </Box>
  );
}
