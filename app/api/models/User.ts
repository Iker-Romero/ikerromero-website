import { Schema, model, models } from 'mongoose'

const userSchema = new Schema(
  {
    sessions: [{ type: Schema.Types.ObjectId, ref: 'Session' }],
    contactSubmissions: [{ type: Schema.Types.ObjectId, ref: 'Contact' }]
  },
  { timestamps: true }
)

const User = models.User || model('User', userSchema)

export default User
