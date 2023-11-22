import { Schema, model, models } from 'mongoose'

const contactSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    privacyPolicyAccepted: {
      type: Boolean,
      required: true
    },
    page: { type: Schema.Types.ObjectId, ref: 'Page', required: true },
    session: { type: Schema.Types.ObjectId, ref: 'Session', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
)

const Contact = models.Contact || model('Contact', contactSchema)

export default Contact
