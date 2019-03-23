const {
	addToCart,
	getCart,
	getProducts,
	check
} = require("../controllers/itemControllers");

module.exports = app => {
	app.get("/api/products", getProducts);
	app.get("/api/cart", getCart);
	app.post("/api/addtocart", addToCart);
	app.post("/api/check", check);
};
