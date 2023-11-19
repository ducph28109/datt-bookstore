import User from "../models/user"


export const getUsers = async (req, res) => {
    try {
const user = await User.find()
return res.status(200).json({
    message:"danh sách người dùng thành công",
    user
})
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
}