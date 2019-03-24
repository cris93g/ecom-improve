const {
	addToCart,
	getCart,
	getProducts,
	check,
	getTvs
} = require("../controllers/itemControllers");

module.exports = app => {
	app.get("/api/tv", getTvs);
	app.get("/api/products", getProducts);
	app.get("/api/cart", getCart);
	app.post("/api/addtocart", addToCart);
	app.post("/api/check", check);
};
