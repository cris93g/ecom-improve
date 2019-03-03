module.exports = {
  getTvs(req, res) {
    const db = req.app.get("db");
    db.getTv()
      .then(products => res.status(200).json(products))
      .catch(console.log);
  }
};
