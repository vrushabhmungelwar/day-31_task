import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./home";
import { Todo } from "./to-do";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { Products } from "./products";
import { Edit } from "./editprod";
import { Add } from "./addproduct";

const drawerWidth = 180;

function App(props) {
  const [product, setProduct] = useState([
    {
      id: uuid(),
      createdAt: "27/03/2019",
      description:
        "Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.",
      media: "/static/images/products/product_1.png",
      title: "Dropbox",
      totalDownloads: "594",
    },
    {
      id: uuid(),
      createdAt: "31/03/2019",
      description:
        "Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.",
      media: "/static/images/products/product_2.png",
      title: "Medium Corporation",
      totalDownloads: "625",
    },
    {
      id: uuid(),
      createdAt: "03/04/2019",
      description:
        "Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.",
      media: "/static/images/products/product_3.png",
      title: "Slack",
      totalDownloads: "857",
    },
    {
      id: uuid(),
      createdAt: "04/04/2019",
      description:
        "Lyft is an on-demand transportation company based in San Francisco, California.",
      media: "/static/images/products/product_4.png",
      title: "Lyft",
      totalDownloads: "406",
    },
    {
      id: uuid(),
      createdAt: "04/04/2019",
      description:
        "GitHub is a web-based hosting service for version control of code using Git.",
      media: "/static/images/products/product_5.png",
      title: "GitHub",
      totalDownloads: "835",
    },
    {
      id: uuid(),
      createdAt: "04/04/2019",
      description:
        "Squarespace provides software as a service for website building and hosting. Headquartered in NYC.",
      media: "/static/images/products/product_6.png",
      title: "Squarespace",
      totalDownloads: "835",
    },
  ]);
  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button variant="text" onClick={() => navigate("/")}>
          Home
        </ListItem>

        <ListItem button variant="text" onClick={() => navigate("/to-do")}>
          To-do
        </ListItem>
        <ListItem button variant="text" onClick={() => navigate("/products")}>
          Products
        </ListItem>
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              CRUD Task
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
        </Box>
      </Box>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/to-do" element={<Todo />} />
        <Route path="/edit/:index" element={<Edit product={product} setProduct={setProduct}/>} />
        <Route path="/add" element={<Add product={product} setProduct={setProduct}/>} />


        <Route
          path="/products"
          element={<Products product={product} setProduct={setProduct} />}
        />
      </Routes>
    </div>
  );
}

export default App;
