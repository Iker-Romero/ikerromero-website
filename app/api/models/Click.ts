import { Schema, model, models } from 'mongoose'

const ClickSchema = new Schema(
  {
    id: { type: String, required: true },
    timeUntilEvent: { type: Number, required: true },
    page: { type: Schema.Types.ObjectId, ref: 'Page' }
  },
  { timestamps: true }
)

const Click = models.Click || model('Click', ClickSchema)

export default Click
