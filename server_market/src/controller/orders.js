import User from "../models/user";
import Order from "../models/orders";
import Product from "../models/products";
import { validateCheckout } from "../validation/checkout";

const checkCancellationTime = (order) => {
    const checkTime = new Date(order.createdAt);
    const currentTime = new Date();
    const timeDifference = (currentTime - checkTime) / 1000 / 60 / 60;
    if (timeDifference < 24) {
        return {
            canCancel: true,
        };
    } else {
        return {
            canCancel: false,
        };
    }
};

//Tạo mới đơn hàng
export const CreateOrder = async (req, res) => {
    try {
        const { products, paymentMethod } = req.body;
        const { error } = validateCheckout.validate(req.body, {
            abortEarly: false,
        });
        if (error) {
            return res.status(401).json({
                status: 401,
                message: error.details.map((error) => error.message),
            });
        }

        if (!products || products.length === 0) {
            return res.status(400).json({
                status: 400,
                message: "Cannot place an order due to empty product",
            });
        }

        const err = [];
        for (let item of products) {
            const prd = await Product.findById(item._id);
            if (!prd) {
                err.push({
                    _id: item._id,
                });
            }
        }
        if (err.length > 0) {
            return res.status(404).json({
                body: {
                    data: err,
                },
                message: "Product not exist",
                status: 404,
            });
        }

        for (let item of products) {
            const prd = await Product.findById(item._id);

            let itemQuantity = item.quantity;
            if (prd.maxQuantity === 0) {
                return res.status(404).json({
                    status: 404,
                    _id: item._id,
                    message: "Sản phẩm đã hết hàng!",
                });
            }
            if (item.quantity > prd.maxQuantity) {
                return res.status(400).json({
                    status: 400,
                    message: "Ko đủ số lượng ",
                });
            }
            if (itemQuantity != 0 || prd.maxQuantity != 0) {

                await Product.findOneAndUpdate(
                    { _id: prd._id },
                    {
                        maxQuantity: prd.maxQuantity - itemQuantity
                    }
                );

            }
        }
        // console.log(req.user);
        const data = await Order.create(req.body);
        if (req.user != null) {
            await Order.findByIdAndUpdate(data._id, { userId: req.user._id });
            await User.findByIdAndUpdate(req.user._id, {
                $push: {
                    orders: data._id,
                },
            });
        }
       
        return res.status(201).json({
            body: { data },
            status: 201,
            message: "Order success",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message,
        });
    }
};
//Admin lấy tất cả đơn hàng
export const GetAllOrders = async (req, res) => {
    const {
        _page = 1,
        _order = "asc",
        _limit = 9999,
        _sort = "createdAt",
    } = req.query;

    const options = {
        page: _page,
        limit: _limit,
        sort: {
            [_sort]: _order === "desc" ? -1 : 1,
        },
    };

    try {
        const data = await Order.paginate({}, options);
        if (data.docs.length == 0) {
            return res.status(200).json({
                status: 200,
                message: "There are no orders",
                body: { data: [] }
            });
        }
        return res.status(201).json({
            body: {
                data: data.docs,
                pagination: {
                    currentPage: data.page,
                    totalPages: data.totalPages,
                    totalItems: data.totalDocs,
                },
            },
            status: 201,
            message: "Get order successfully",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message,
        });
    }
};

//Khách hàng (đã đăng nhập) tra cứu đơn hàng
export const OrdersForMember = async (req, res) => {
    try {
        const userId = req.user._id;
        
        const data = await Order.find({ userId });
      
        if (data.length == 0) {
            return res.status(200).json({
                status: 200,
                message: "Order not found",
                body: { data: [] }
            });
        }
        return res.status(201).json({
            body: {
                data,
            },
            status: 201,
            message: "Get order successfully",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message,
        });
    }
};



// Chi tiết đơn đặt hàng
export const OrderDetail = async (req, res) => {
    try {
        const orderId = req.params.id;
        const data = await Order.findById(orderId);
        if (!data) {
            return res.status(404).json({
                status: 404,
                message: "Not found order",
                body: { data: {} }
            });
        }
        const { canCancel } = checkCancellationTime(data);
        return res.status(201).json({
            body: { data },
            status: 201,
            message: "Get order successfully",
            canCancel,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message,
        });
    }
};



