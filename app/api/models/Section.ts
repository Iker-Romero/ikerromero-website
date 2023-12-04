import { Schema, model, models } from 'mongoose'

const sectionSchema = new Schema(
  {
    id: { type: String, required: true },
    maxIntersectionRatio: { type: Number, required: true },
    URL: { type: String, required: true },
    page: { type: Schema.Types.ObjectId, ref: 'Page' }
  },
  { timestamps: true }
)

const Section = models.Section || model('Section', sectionSchema)

export default Section
