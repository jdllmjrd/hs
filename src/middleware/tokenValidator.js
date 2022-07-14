const jwt = require("jsonwebtoken");

const excludeUrl = [
  "/users-profile-pic",
  "/featured_dentist",
  "/services",
  `/${process.env.API_VERSION}/home`,
  `/${process.env.API_VERSION}/register`,
  `/${process.env.API_VERSION}/login`,
  `/${process.env.API_VERSION}/services`,
];

const isRequiredToken = (path) => {
  return excludeUrl.filter((url) => path.startsWith(url)).length == 0;
};

module.exports = (req, res, next) => {
  if (isRequiredToken(req.path)) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) {
      return res.status(401).send("No access token is detected.");
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        if (process.env.ENABLE_ACCESS_TOKEN_LOG === "true") {
          console.log(`${err}\n`);
        }
        return res.sendStatus(403);
      }
      req.user = user;
    });
  }
  next();
};
