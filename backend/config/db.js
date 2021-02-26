import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI)
        const conn = await mongoose.connect(process.env.MONGO_URI, {useNewUriParcer: true})
        console.log('Подключение к бд успешно')
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB