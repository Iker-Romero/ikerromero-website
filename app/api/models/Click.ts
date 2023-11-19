import { Schema, model } from 'mongoose'

const ClickSchema = new Schema(
  {
    id: { type: String, required: true },
    href: { type: String, required: true },
    timeUntilEvent: { type: Number, required: true }
  },
  { timestamps: true }
)

const Click = model('Click', ClickSchema)

export default Click
