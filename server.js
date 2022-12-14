const app = require ('./app.js')
const db = require ('./db')

const PORT = process.env.PORT || 3005

db.on('error',console.error.bind(console, 'MongoDB connection error'))

app.listen(PORT, () => console.log(`listening on port ${PORT}`))