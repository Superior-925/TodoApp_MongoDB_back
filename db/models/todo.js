const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    taskText: { type: String, required: true },
    isDone: {type: Boolean}
});

//Export model
module.exports = mongoose.model("Todo", TodoSchema);
