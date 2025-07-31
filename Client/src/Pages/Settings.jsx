import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Switch,
  FormControlLabel,
  MenuItem,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const Settings = () => {
  const formik = useFormik({
    initialValues: {
      hotelName: "",
      phone: "",
      email: "",
      location: "",

      reportTime: "17:00",
      smsEnabled: true,
      reportEmail: "",

      themeMode: "light",
      language: "english",
    },
    validationSchema: Yup.object({
      hotelName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string().required("Required"),
      reportEmail: Yup.string().email("Invalid").required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Settings saved:", values);
    },
  });

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
        Settings
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          {/* 1. Business Info */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Business Info
                </Typography>

                <TextField
                  fullWidth
                  label="Hotel/Restaurant Name"
                  name="hotelName"
                  value={formik.values.hotelName}
                  onChange={formik.handleChange}
                  sx={{ mt: 2 }}
                />
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  sx={{ mt: 2 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  sx={{ mt: 2 }}
                />
                <TextField
                  fullWidth
                  label="Location / Address"
                  name="location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  sx={{ mt: 2 }}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* 2. Report & Analytics */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Report & Analytics
                </Typography>

                <TextField
                  fullWidth
                  label="Daily Report Time"
                  type="time"
                  name="reportTime"
                  value={formik.values.reportTime}
                  onChange={formik.handleChange}
                  sx={{ mt: 2 }}
                  InputLabelProps={{ shrink: true }}
                />

                <FormControlLabel
                  control={
                    <Switch
                      checked={formik.values.smsEnabled}
                      onChange={(e) =>
                        formik.setFieldValue("smsEnabled", e.target.checked)
                      }
                    />
                  }
                  label="Enable SMS Reports"
                  sx={{ mt: 2 }}
                />

                <TextField
                  fullWidth
                  label="Report Email Address"
                  name="reportEmail"
                  value={formik.values.reportEmail}
                  onChange={formik.handleChange}
                  sx={{ mt: 2 }}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* 3. System Preferences */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  System Preferences
                </Typography>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      select
                      label="Theme Mode"
                      name="themeMode"
                      value={formik.values.themeMode}
                      onChange={formik.handleChange}
                    >
                      <MenuItem value="light">Light</MenuItem>
                      <MenuItem value="dark">Dark</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      select
                      label="App Language"
                      name="language"
                      value={formik.values.language}
                      onChange={formik.handleChange}
                    >
                      <MenuItem value="english">English</MenuItem>
                      <MenuItem value="swahili">Swahili</MenuItem>
                    </TextField>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Save Button */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained" color="primary">
                Save Settings
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Settings;
