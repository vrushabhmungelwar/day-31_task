// import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

export function Add({ product, setProduct }) {
  const navigate = useNavigate();
  const theme = createTheme();

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        id: uuid(),
        createdAt: date,
        title: "",
        description: "",
        totalDownloads: "0",
      },
      onSubmit: (values) => {
        setProduct([...product, values]);
        navigate("/products");
      },
    });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Edit
          </Typography>
          <Box sx={{ mt: 3 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="title"
                    name="title"
                    fullWidth
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Title"
                    type="text"
                    error={errors.title && touched.title}
                    helperText={errors.title && touched.title && errors.title}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="description"
                    name="description"
                    fullWidth
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Descripton"
                    error={errors.description && touched.description}
                    helperText={
                      errors.description &&
                      touched.description &&
                      errors.description
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                color="success"
                variant="outlined"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
