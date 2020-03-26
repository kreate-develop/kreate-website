import React from "react"

import Layout from "../components/Layout"
import { StyledSection } from "../components/section"

import { useStaticQuery, graphql } from "gatsby"
import GodownComponent from "../components/GodownComponent"

import "../styles/homepage.scss"

import Title from "../components/Titles"
import { IntroGallery } from "../components/IntroGallery"
import ServiceCard from "../components/ServiceCard"

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
      {/*main */}
      <StyledSection>
        <div className="section--hero">
          <div className="section--hero_message">
            <div className="section--hero_message-text section--display">
              <Title label={slogan} />
            </div>
            <div className="section--hero_gallery section--display">
              <IntroGallery images={["map.jpg", "3.jpg", "4.jpg"]} />
            </div>
          </div>
          <div className="section--hero_go-down">
            <a href="#about">
              <GodownComponent mainColor={secondColor} />
            </a>
          </div>
        </div>
      </StyledSection>
      {/*main */}
      <div id="about">
        <StyledSection shadow>
          <div className="section--about">
            <div className="section--about-title section--display">
              <Title label="About" />
              <p>{about}</p>
            </div>
            <div className="section--about-gallery section--display"></div>
          </div>
        </StyledSection>
      </div>
      <div id="services">
        <StyledSection color={mainColor}>
          <div className="section--services">
            <div className="section--services-title">
              <Title label="Services" color="#fff" />
            </div>
            <div className="section--services_data">
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
