import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    sessions: [{ type: Schema.Types.ObjectId, ref: 'Visit' }],
    contactSubmissions: [{ type: Schema.Types.ObjectId, ref: 'Contact' }]
  },
  { timestamps: true }
)

const User = model('User', userSchema)

export default User
