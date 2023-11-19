import { Schema, model } from 'mongoose'

const pageSchema = new Schema(
  {
    href: {
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

const Page = model('Page', pageSchema)

export default Page
