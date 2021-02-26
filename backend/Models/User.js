import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
        }, 
        gender: {
            type: String
        },
        birthDate: {
            type: Date
        }, 
        interests: {
            type: Array,
            contains: {
                type: String
            }
        }
    }
)

const User = mongoose.model("User", UserSchema)

export default User