import jwt from "jsonwebtoken";

export const accessToken = async (req, res, next) => {
  try{
  const authHeader = req.headers["authorization"];
  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).send({
      message: "Authorization header missing or malformed",
      success: false,
    });
  }

  const token = authHeader.split(" ")[1];
  
  jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
    if (err) {
      return res.status(401).send({
        message: "Authorization Failed",
        success: false,
      });
    } else {
      req.body.userId = decode.id;
      next();
    }
  });
} catch (error) {
  res.status(401).send({
    message: "Authorization Failed due to error",
    success: false,
  });
}

};

