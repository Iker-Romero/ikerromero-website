import { Schema, model } from 'mongoose'

const sectionSchema = new Schema(
  {
    id: { type: String, required: true },
    maxIntersectionRatio: { type: Number, required: true }
  },
  { timestamps: true }
)

const Section = model('Section', sectionSchema)

export default Section
