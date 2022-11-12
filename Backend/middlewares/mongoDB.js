const mongoose = require('mongoose') //db
mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/KKEMJuly?authSource=admin&replicaSet=atlas-s6513g-shard-0&readPreference=primary&ssl=true ', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}). then(()=>{
    console.log('mongoDB connected successfully!!!')
}).catch((error)=>{
    console.log(error.message)
})