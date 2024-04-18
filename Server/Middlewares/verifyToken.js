const jwt =  require("jsonwebtoken");   
const verifyToken = (req, res, next) => {
    try {
        const authorizationHeader = req.header("Authorization");
        if (!authorizationHeader) {
            return res.status(401).json({ message: "Unauthorized access. Authorization header is missing." });             
        }
        const reqHeader = authorizationHeader.split(" ");
        const token = reqHeader[1];

        if (!token) {
            return res.status(401).json({ message: "Unauthorized access. Token is missing." });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: "Invalid token" });
    }
}

module.exports= verifyToken;