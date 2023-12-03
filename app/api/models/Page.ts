import { Schema, model, models } from 'mongoose'

const pageSchema = new Schema(
  {
    URL: {
      type: String,
      required: true
    },
    timeSinceSessionStart: {
      type: Number,
      required: true
    },
    time: {
      type: Number,
      required: true
    },
    sections: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Section' }],
      required: true
    },
    clicks: [{ type: Schema.Types.ObjectId, ref: 'Click' }]
  },
  { timestamps: true }
)

const Page = models.Page || model('Page', pageSchema)

export default Page
