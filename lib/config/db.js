const { default: mongoose } = require("mongoose")

export const ConnectDb = async () =>{
    await mongoose.connect('mongodb+srv://subhajitmanna264:dFktlaHbOeJEKVVA@cluster0.4enxx6l.mongodb.net/todo-app')
    console.log('db connected');
}