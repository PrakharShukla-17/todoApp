import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";
export const authentication = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                msg: "Token missing or invalid"
            });
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, JWT_SECRET);
        if (!decoded) {
            res.status(403).json({
                msg: "invalid token"
            });
            return;
        }
        req.userId = decoded.id;
        next();
    }
    catch (e) {
        console.log("Erros", e);
        return void res.status(403).json({
            msg: "Error during auth(token issue)"
        });
    }
};
//# sourceMappingURL=authentication.js.map