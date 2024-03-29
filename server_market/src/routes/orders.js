import express from "express";
import dotenv from "dotenv";
import User from "../models/user";
import {
  GetAllOrders,
  CreateOrder,
  OrderDetail,
  OrdersForMember,

} from "../controller/orders";
import authentication from "../middleware/authentication";
import jwt from "jsonwebtoken";


dotenv.config();
const router = express.Router();

router.post(
  "/orders",
  async (req, res, next) => {
    const token = req.cookies?.refreshToken;
    // console.log(token);
    if (!token) {
      req.user = null;
      next();
      return;
    }
    jwt.verify(
      token,
      process.env.SERECT_REFRESHTOKEN_KEY,
      async (err, payload) => {
        if (err) {
          if (err.name == "JsonWebTokenError") {
            return res.status(402).json({
              message: "Refresh Token is invalid", //rf token ko hợp lệ
            });
          }
          if (err.name == "TokenExpiredError") {
            return res.status(403).json({
              message: "Refresh Token is expired ! Login again please !", //rf token hết hạn
            });
          }
        }
        const user = await User.findById(payload._id);
        req.user = user;
        next();
      }
    );
  },
  CreateOrder
);
router.get("/orders", GetAllOrders);
router.get("/orders-member", authentication, OrdersForMember);
router.get("/orders/:id", OrderDetail);


export default router;
