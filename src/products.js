import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ item, setProduct, product,index }) => {
const navigate = useNavigate();

  //
  const removeitem = (id) => {
    setProduct(product.filter((item) => item.id !== id));
  };

  return (
    <div className="product">
      <Card sx={{ minWidth: 250, maxWidth: 300, minHeight: 250 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {item.createdAt}
          </Typography>
          <Typography variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Total Downloads: {item.totalDownloads}
          </Typography>
          <Typography variant="body2">{item.description}</Typography>
        </CardContent>
        <CardActions>
          <IconButton
            variant="text"
            color="inherit"
            style={{ marginLeft: "auto" }}
            onClick={() => navigate("/edit/" + index)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            variant="text"
            color="inherit"
            onClick={() => removeitem(item.id)}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export function Products({ product, setProduct }) {
const navigate = useNavigate();

  return (
    <div className="product-main">
      <h1 className="list">Products</h1>
      <div className="product-cont">
        {product.map((item, index) => (
          <ProductItem
            key={index}
            index={index}
            item={item}
            product={product}
            setProduct={setProduct}
          />
        ))}
        <div className="add-product">
          <Card sx={{ minWidth: 250, maxWidth: 300, minHeight: 250 }}>
            <Button
              variant="text"
              color="inherit"
              style={{ marginTop: "100px" }}
              onClick={() => navigate("/add")}
            >
              Add Product
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
