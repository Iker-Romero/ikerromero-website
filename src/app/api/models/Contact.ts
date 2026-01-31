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
    }
  },
  { timestamps: true }
)

const Contact = models.Contact || model('Contact', contactSchema)

export default Contact
