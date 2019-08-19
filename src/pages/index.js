import React from "react";
import { Link, graphql } from "gatsby";
import Img from 'gatsby-image';
import Layout from "../components/Layout";
import Image from "../components/Image";
import SEO from "../components/Seo";

const IndexPage = (props) => {
  const { cowScuffler, cowScufflerSmall } = props.data;
  return (
    <Layout>
      <SEO title="Scuffletown Garden"/>
      <section id="header" className="d-flex flex-column flex-md-row w-100 pt-md-3 container mb-3">
        <div className="w-25 d-none d-md-flex">
          <Img alt="Cow Scuffler" fluid={cowScuffler.childImageSharp.fluid} className="w-100"/>
        </div>
        <div className="px-3 d-md-none">
          <Img alt="Cow Scuffler" fluid={cowScufflerSmall.childImageSharp.fluid} className="w-50 mx-auto"/>
        </div>
        <div className="w-100 w-md-75 mx-auto darkGreen d-flex flex-column justify-content-center px-3">
          <h1 className="text-left text-md-center">Scuffletown Garden</h1>
          <p className="px-md-5" style={{ fontSize: '1.25em' }}>Nestled in the heart of the fan, Scuffletown Garden brings sustainable and friendly New American Cuisine to the iconic neighborhood without breaking the bank.</p>
          <div className="d-flex justify-content-center mt-3">
            <a
              className="btn btn-lg btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="resy"
              href="https://resy.com/cities/ric/scuffletown-garden-restaurant-bar"
            >
              Find a Table
            </a>
          </div>
        </div>
      </section>
      
    </Layout>
)};

export default IndexPage;

export const query = graphql`
  query {
    cowScuffler: file(relativePath: { regex: "/CowScuffler/" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cowScufflerSmall: file(relativePath: { regex: "/CowScuffler-small/" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`;
