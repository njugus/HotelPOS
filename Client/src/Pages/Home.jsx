
import { Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

export default function Home() {
    // src/pages/Home.jsx

const menuItems = [
  {
    id: 1,
    name: "Grilled Chicken",
    price: 850,
    image: "/images/chicken.jpg",
  },
  {
    id: 2,
    name: "Fried Rice",
    price: 600,
    image: "/images/rice.jpg",
  },
  {
    id: 3,
    name: "Burger & Fries",
    price: 700,
    image: "/images/burger.jpg",
  },
];
  return (
    <div>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Menu Items
      </Typography>

      <Grid container spacing={4}>
        {menuItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: "#ffffff", borderRadius: 3, boxShadow: 3 }}>
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
    </div>
  );
}
