import {
  Modal,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Slide from "@mui/material/Slide";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  p: 4,
  borderRadius: 2,
  width: 400,
};

const categories = ["Meals", "Drinks"];

export default function AddItemModal({ open, onClose }) {
  const formik = useFormik({
    initialValues: {
      image: null,
      name: "",
      category: "",
      price: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      category: Yup.string().required("Required"),
      price: Yup.number()
        .typeError("Must be a number")
        .positive("Must be positive")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Submitted Item:", values);
      onClose();
    },
  });

  return (
    <Modal open={open} onClose={onClose}> 
      
      <Box component="form" onSubmit={formik.handleSubmit} sx={style}>
        <Typography variant="h6" gutterBottom>
          Add Menu Item
        </Typography>

        <Button
          variant="outlined"
          component="label"
          sx={{ mb: 2 }}
        >
          Upload Image
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => formik.setFieldValue("image", e.currentTarget.files[0])}
          />
        </Button>

        <TextField
          fullWidth
          label="Meal Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Price (Ksh)"
          name="price"
          type="number"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
          sx={{ mb: 3 }}
         />

        <TextField
          select
          fullWidth
          label="Category"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.category && Boolean(formik.errors.category)}
          helperText={formik.touched.category && formik.errors.category}
          sx={{ mb: 3 }}
        >
          {categories.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <Button type="submit" variant="contained" fullWidth>
          Add Item
        </Button>
      </Box>
    </Modal>
  );
}
