import { Schema, model, models } from 'mongoose'

const sectionSchema = new Schema(
  {
    id: { type: String, required: true },
    maxIntersectionRatio: { type: Number, required: true }
  },
  { timestamps: true }
)

const Section = models.Section || model('Section', sectionSchema)

export default Section
