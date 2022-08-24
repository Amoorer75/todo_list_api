const db = require('../db')
const Item = require('../models/item')

db.on('error',console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const listItems = [
        {task: 'walk the dog', isComplete: false},
        {task: 'wash dishes', isComplete: true},
        {task: 'takeout trash', isComplete: false},

      
    ]
    await Item.insertMany(listItems)
    console.log('created some items')
}

const run = async () => {
    await main()
    db.close()
}
run()