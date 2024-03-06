import { User } from "../model/userModel.js";

export const createUser = async (req, res) => {
    const { name, email, username, password } = req.body;
    try {
        let user = new User({
            name,
            email,
            username,
            password,
        });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
}