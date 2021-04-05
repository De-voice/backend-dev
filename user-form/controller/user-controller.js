const User = require("../model/user-model");

const createUser = (req, res) => {
	const { name, email, password } = req.body;
	const newUser = {
		name: name,
		email: email,
		password: password,
	};

	if (!name || !email || !password) {
		return res.status(400).json({
			success: false,
			message: "no user details provided",
		});
	}

	if (!newUser) {
		return res.status(400).json({
			success: false,
			error: err,
		});
	}

	const user = new User(newUser);
	user
		.save()
		.then(() => {
			return res.status(200).json({
				success: true,
				user: user,
				message: "user created",
			});
		})
		.catch((err) => {
			return res.status(400).json({
				err: err.message,
				message: "user not created",
			});
		});
};;

const getUsers = async (req, res) => {
	try {
		await User.find({}, (err, users) => {
			if (err) {
				return res.status(400).json({ error: err, success: false });
			}
			if (!users.length) {
				return res.status(400).json({
					success: false,
					message: "users not found",
				});
			}

			return res.status(200).json({
				success: true,
				data: users,
			});
		});
	} catch (error) {
		console.log(error);
	}
 
};

module.exports = { createUser,getUsers };
