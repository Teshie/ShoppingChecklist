require(`dotenv`).config();
const connectDB = require("./config/db");
const express = require("express");
const productRoutes = require("./route/productRoutes");

const ProductModel = require("./models/Product");
const app = express();

connectDB();

app.get("/", async (req, res) => {
  const product = new ProductModel({
    name: "Apple",
    cost: 20,
    description: "test description",
    time: "2:00AM",
  });
  try {
    await product.save();
    res.send("inserted data");
  } catch (error) {
    console.log(error);
  }
});

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
