import { Schema, model, models } from 'mongoose'

const ClickSchema = new Schema(
  {
    id: { type: String, required: true },
    timeUntilEvent: { type: Number, required: true }
  },
  { timestamps: true }
)

const Click = models.Click || model('Click', ClickSchema)

export default Click
