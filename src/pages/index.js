import React from "react";
import { graphql } from "gatsby";
import ReactGA from 'react-ga';
import Img from 'gatsby-image';
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Gallery from "../components/Gallery";
import Map from '../components/Map';

const IndexPage = (props) => {
  const { cowScuffler, cowScufflerSmall, diner } = props.data;
  return (
    <Layout>
      <SEO title="Scuffletown Garden"/>
      <section id="main-header" 
        style={{ minHeight: 600, width: '100%', position: 'relative'}}
        className="d-flex justify-content-center align-items-center"
      >
        <Img alt="Scuffletown Garden Dining Room" fluid={diner.childImageSharp.fluid} className="bg-image" style={{ position: 'absolute' }}/>
      </section>
      <section id="intro" className="py-5">
        <div className="d-flex flex-column flex-md-row w-100 pt-md-5 container mb-3">
          <div className="w-25 d-none d-md-flex">
            <Img alt="Cow Scuffler" fluid={cowScuffler.childImageSharp.fluid} className="w-100"/>
          </div>
          <div className="px-3 d-md-none">
            <Img alt="Cow Scuffler" fluid={cowScufflerSmall.childImageSharp.fluid} className="w-50 mx-auto"/>
          </div>
          <div className="w-100 w-md-75 mx-auto darkGreen d-flex flex-column justify-content-center">
            <h1 className="text-left text-md-center">Scuffletown Garden</h1>
            <p className="px-md-5" style={{ fontSize: '1.25em' }}>Nestled in the heart of the fan, Scuffletown Garden brings sustainable and friendly New American Cuisine to the iconic neighborhood without breaking the bank.</p>
          </div>
        </div>
        <div className="d-flex justify-content-center my-5">
            <a
              className="btn btn-lg btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="resy"
              href="https://resy.com/cities/ric/scuffletown-garden-restaurant-bar"
              onClick={() => {
                ReactGA.event({
                  category: 'resy',
                  action: 'click',
                  label: 'reserve-table',
                });
              }}
            >
              Find a Table
            </a>
          </div>
      </section>
      <section id="gallery" className="py-5">
        <Gallery/>
      </section>
      <section id="info" className="py-5">
        <div className="d-flex flex-column flex-md-row container">
          <div className="d-flex flex-column darkGreen w-100 w-md-50 anchor" id="contact">
            <h2>Contact</h2>
            <p>
              421 Strawberry Street
              <br/>
              Richmond, Virginia
            </p>
            <p>
              <a 
                href="tel:+1-912-1297"
                target="_blank"
                rel="noopener noreferrer"
                className="link-green"
              >
                (804) 912-1297
              </a>
            </p>
            <p>
              <a
                href="mailto:scuffletowngarden@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-green"
              >
                scuffletowngarden@gmail.com
              </a>
            </p>
            <h2>Hours</h2>
            <p>Monday - Thursday: 11:30am - 10:00pm</p>
            <p>Friday: 11:30am - 11:00pm</p>
            <p>Saturday: 11:00am - 11:00pm</p>
            <p>Sunday: 10:00am - 10:00pm</p>
          </div>
          <div className="d-flex flex-column w-100" id="map" style={{ minHeight: 350 }}>
            <Map onMapLoad={(map) => {
                // eslint-disable-next-line no-unused-vars
                const marker = new window.google.maps.Marker({
                  position: { lat: 37.555680, lng: -77.466430 },
                  map: map,
                });
              }}
            />
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
    diner: file(relativePath: { regex: "/entrance-view/" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`;
