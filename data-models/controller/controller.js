const Todo = require("../user-model/model");

const createItem = (req, res) => {
	const {name,email,zipcode,phoneNumber} = req.body;

	const newUser = {
		name,
		email,
		zipcode,
		phoneNumber,
	}
	if (!newUser) {
		return res.status(400).json({
			success: false,
			message: "You must provide an item",
		});
	}

	const todo = new Todo(newUser);

	if (!todo) {
		return res.status(400).json({ success: false, error: err });
	}

	todo
		.save()
		.then(() => {
			return res.status(200).json({
				success: true,
				id: todo.id,
				message: "todo item created",
			});
		})
		.catch((error) => {
			res.status(400).json({ error, message: "todo item not created" });
		});
};


// get all todos from database

const getTodos = async (req,res) => {
    await Todo.find({},(err,todos) => {
        if(err) {
            return res.status(400).json({success:false,error:err})
        }

        if(!todos.length) {
            return res.status(404).json({
                success:false,
                error:"item not found"
            })
        }

        return res.status(200).json({
            success:true,
            data:todos
        })
    }).catch(err => console.log(err))
}

module.exports = { createItem,getTodos };
