import connectMongoDB from '@/api/config/mongodb'
import Page from '@/api/models/Page'
import Section from '@/api/models/Section'
import { NextRequest, NextResponse } from 'next/server'

import { Section as SectionType } from '../../../../../../globals'

type Params = { params: { pageId: string } }

export const PATCH = async (
  request: NextRequest,
  { params: { pageId } }: Params
) => {
  try {
    const [body] = await Promise.all([request.json(), connectMongoDB()])

    const { sessionStartDate, sections } = body

    const sectionsIds = sections.map(({ id }: SectionType) => id)

    // Retrieve the current page to compare sections
    const currentPage = await Page.findById(pageId).populate('sections')

    const updatedSectionsIds = await Promise.all(
      currentPage.sections.map(
        async ({ id, maxIntersectionRatio }: SectionType) => {
          if (sectionsIds.includes(id)) {
            const updatedSection = await Section.findOneAndUpdate(
              { id },
              { maxIntersectionRatio },
              { new: true }
            )

            return updatedSection._id
          } else {
            const newSection = await Section.create({
              id,
              maxIntersectionRatio,
              URL: currentPage.URL,
              page: pageId
            })

            return newSection._id
          }
        }
      )
    )

    await Page.findByIdAndUpdate(pageId, {
      time:
        Date.now() -
        (new Date(sessionStartDate).getTime() +
          currentPage.timeSinceSessionStart),
      sections: updatedSectionsIds
    })

    return NextResponse.json({ status: 200 })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ error }, { status: 500 })
  }
}
