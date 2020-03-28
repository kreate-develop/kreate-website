import React from "react"

import Layout from "../components/Layout"
import { StyledSection } from "../components/section"

import { useStaticQuery, graphql } from "gatsby"
import GodownComponent from "../components/GodownComponent"

import Title from "../components/Titles"
import { IntroGallery } from "../components/IntroGallery"
import ServiceCard from "../components/ServiceCard"

import Gallery from "../components/Gallery"

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          mainColor
          slogan
          secondColor
          about
        }
      }
      allMarkdownRemark {
        nodes {
          id
          excerpt
          frontmatter {
            title
            icon
            color
          }
        }
      }
    }
  `)
  const { mainColor, slogan, secondColor, about } = data.site.siteMetadata
  const services = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <StyledSection>
        <div className="h-screen flex flex-col-reverse xs:flex-row items-center justify-center relative">
          <div className="mt-5 md:mt-0">
            <Title label={slogan} />
          </div>
          <IntroGallery images={["map.jpg", "3.jpg", "4.jpg"]} />
        </div>
        <div className=" mb-6 absolute bottom-0">
          <a href="#about">
            <GodownComponent mainColor={secondColor} />
          </a>
        </div>
      </StyledSection>
      {/*about*/}
      <div id="about">
        <StyledSection>
          <div className="flex flex-col xs:flex-row p-10 xs:p-0 xs:px-16 xs:py-10 xl:px-40 bg-gray-100">
            <div className="mb-10">
              <Title label="About" color="#2f4858" />
            </div>
            <div className="mb-10 xs:w-2/4">
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
      </div>

      <div id="services">
        <StyledSection color={mainColor}>
          <div className="flex flex-col p-10">
            <div className="mb-10">
              <Title label="Services" color="#fff" />
            </div>

            <div className="flex flex-col xs:flex-row">
              {services.map(service => (
                <ServiceCard
                  key={service.id}
                  title={service.frontmatter.title}
                  content={service.excerpt}
                  color={service.frontmatter.color}
                  icon={service.frontmatter.icon}
                />
              ))}
            </div>
          </div>
        </StyledSection>
      </div>
    </Layout>
  )
}
