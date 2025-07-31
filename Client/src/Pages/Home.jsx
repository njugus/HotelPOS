
import { Typography, Grid, Card, CardMedia, CardContent, Button, Box } from "@mui/material";
import Chips from "../assets/chips.jpeg"
import Soda from "../assets/soda.jpeg"
import Chicken from "../assets/chicken.jpeg"
import AddIcon from "@mui/icons-material/Add";
import AddItemModal from "../Components/AddModalForm";
import { useState } from "react";

export default function Home() {
    // add items to the menu
    //state to keep track of  Modal
    const[openModal, setOpenModal] = useState(false)

const menuItems = [
  {
    id: 1,
    name: "Grilled Chicken",
    price: 850,
    image: Chicken,
  },
  {
    id: 2,
    name: "Soda",
    price: 600,
    image: Soda,
  },
  {
    id: 3,
    name: "Chips",
    price: 700,
    image: Chips,
  },
];
  return (
    <div>
     <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Menu Items
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={ () => setOpenModal(true)}
          sx={{ textTransform: "none", borderRadius: 2,}}
        >
          Add Item
        </Button>
      </Box>

      <Grid container spacing={4}>
        {menuItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: "#ffffff", borderRadius: 3, boxShadow: 3, '&:hover': { boxShadow: 6 }}}>
              <CardMedia
                component="img"
                height="160"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  {item.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Ksh {item.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <AddItemModal open = { openModal } onClose={() => setOpenModal(false)}/>
    </div>
  );
}
