import React from "react"

import Layout from "../components/Layout"
import Title from "../components/Titles"

import { useStaticQuery, graphql } from "gatsby"
import { StyledSection } from "../components/section"
import Gallery from "../components/Gallery"

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          about
        }
      }
    }
  `)
  const { about } = data.site.siteMetadata

  return (
    <Layout>
      <StyledSection>
        <div className="flex flex-col xs:flex-row p-10 xs:p-0 xs:px-16 xs:py-10 xl:px-40 bg-gray-100">
          <div className="mb-10 xs:w-2/4">
            <div className="mb-10">
              <Title label="About" color="#2f4858" />
            </div>
            <p className="mb-5">{about}</p>
            <p className="mb-5">
              {about} <span className="">see more...</span>
            </p>
          </div>

          <div className="xs:ml-10 xs:w-2/4">
            <Gallery />
          </div>
        </div>
      </StyledSection>
    </Layout>
  )
}
