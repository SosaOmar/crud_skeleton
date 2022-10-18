//TODO 101
const adminValidate = (req, res, next) => {
  const role = req.user.role;
  if (role === "admin") {
    next();
  } else {
    return res.status(401).json({ message: "Acces Denied" });
  }
};

//TODO 102
module.exports = adminValidate;
