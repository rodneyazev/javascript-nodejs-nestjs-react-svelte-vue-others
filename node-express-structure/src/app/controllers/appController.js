const { v4: uuid } = require('uuid');

let users = [];

exports.getUsers = (req, res) => {
    res.send(users)
}

exports.getUser = (req, res) => {
    const user = users.filter((user) => user.id === req.params.id)
    res.send(user)
}

exports.postUser = (req, res) => {
    const user = req.body
    users.push({id: uuid(), ...user})
    res.send("User added successfully.");
}

exports.putUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);
    user.name = req.body.name;
    user.email = req.body.email;
    user.contact = req.body.contact;
    res.send("User updated successfully.");
}

exports.deleteUser = (req, res) => {
    users = users.filter((user) => user.id !== req.params.id);
    res.send("User deleted Successfully");
}