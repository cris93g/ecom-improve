module.exports = {
	getProducts(req, res) {
		const db = req.app.get("db");
		db.fry_items
			.find()
			.then(products => res.status(200).json(products))
			.catch(console.log);
	},
	getCart(req, res) {
		const db = req.app.get("db");
		db.cart([1])
			.then(cart => {
				return res.status(200).json(cart);
			})
			.catch(console.log);
	},
	addToCart(req, res) {
		const db = req.app.get("db");

		let { quantity, item_id, user_id } = req.body;
		db.addToCart([quantity, item_id, user_id])
			.then(item => {
				console.log(user_id);
				return res.status(200).send(item);
			})
			.catch(console.log);
	},
	getTvs(req, res, next) {
		const db = req.app.get("db");
		db.getTvs()
			.then(products => res.status(200).json(products))
			.catch(console.log);
	},
	check(req, res) {
		console.log(req.body);
		res.send({ status: "SUCCESS" });
	}
};
