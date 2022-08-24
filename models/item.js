const mongoose = require('mongoose')
const Schema = mongoose.Schema

const item = new Schema(
    {
        task: { type: String, required: true },
        isComplete: { type: Boolean, default: false },
    },
    {timestamp:true}
)

module.exports = mongoose.model('item', item)