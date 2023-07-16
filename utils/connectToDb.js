import {MongoClient} from 'mongodb'
const mongodbUri = process.env.MONGODB_URI


const connectToDb = async () => {
    try {
        const client = new MongoClient(mongodbUri, {useNewUrlParser:true, useUnifiedTopology:true})
        await client.connect()
            .then(() => console.log('Mongodb connection established'))
        
        return client.db('stockDataBase')
        
    } catch (error) {
            console.log('Mongodb connection error, error: ' + error)
        
    }
    

}
export default connectToDb