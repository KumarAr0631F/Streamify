import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token) {
            return res.status(402).json({message: "unauthorized - No token provided"})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({message: "unauthorized - Invalid token"})
        }

        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({message: "unauthorized - User not found"})
        }

        req.user = user;
        next();

    } catch (error) {
        console.error("Error in protectRoute middleware",error);
        return res.status(401).json({ message: "Internal Server Error" });
    }
}