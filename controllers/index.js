const Item = require('../models/item')

const getAllItems = async (req,res) => {
    try {
        const items = await Item.find()
        return res.status(200).json({items})

    }catch(err){
        return res.status(500).send(err.message)
    }
}

const createItem = async (req, res) => {
    try {
        const item = await new Item(req.body)
        await item.save()
        return res.status(200).send({
            item,
        })

    }catch(err){
        return res.status(500).json({error: error.message})
    }
}

const updateItem = async (req,res) => {
    try {
        const { id } = req.params
        Item.findByIdAndUpdate(id, req.body, {new:true}, (err, item) => {
            if (err) {
                return res.status(500).send(err)
            }
            if (!item) {
                res.status(500).send('item not found')
            }
            return res.status(200).json(item)
        })

    }catch(err){
        return res.status(500).send(err.message)
    }
}

const deleteItem = async(req, res) => {
    try{
        const {id} = req.params
        const deleted = await Item.findByIdAndDelete(id)
        if(deleted){
            return res.status(200).send("Item deleted")
        }
        throw new Error("item not found")

    }catch(error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
    createItem,
    getAllItems,
 
    updateItem,
    deleteItem
}