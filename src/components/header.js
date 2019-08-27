// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import { navigate } from '@reach/router';
import ReactGA from 'react-ga';
import { FacebookIcon, InstagramIcon, HamburgerIcon, } from '../icons';

let contactURL = '/#contact';

if (typeof window !== 'undefined' && window.location.host === 'cezarcarvalhaes.github.io') {
  contactURL= '/scuffletowngarden/#contact';
}

function Header(props) {
    const [mobileMenuOpen, setMenuOpen] = useState(false);
    const [mobileMenuClass, setMenuClass] = useState('');

    const data = useStaticQuery(graphql`
    query {
      mainLogo: file(relativePath: { eq: "logo-green-horizontal.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoGreen: file(relativePath: { eq: "logo-green.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      secondaryOffWhite: file(relativePath: { eq: "secondary-logo-offwhite.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);



  const toggleMobileMenu = () => {
    if (!mobileMenuOpen) {
      setMenuOpen(true);
      setMenuClass('slide-in');
    } else {
      setMenuOpen(false);
      setMenuClass('slide-out');
    }
  };
  
  return (
    <div>
      <div
        className={`navbar-dark ${mobileMenuClass}`}
        id="mobile-menu"
      >
        <div className="row align-items-center pt-3" id="mobile-header">
          <div className="col home pl-3">
            <Link to="/">
              <Img 
                className="w-25"
                fluid={data.secondaryOffWhite.childImageSharp.fluid}/>
            </Link>
          </div>
          <div
            className="col text-right x closer"
            onClick={() => toggleMobileMenu()}
          >
            <button type="button" className="close offwhite" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        {/* mobile nav  */}
        <div
          className="my-auto d-flex flex-column justify-content-between"
          style={{ height: '90%' }}
        >
          <div className="pt-5 pl-3">
            <ul
              className="navbar-nav mr-auto d-lg-none offwhite"
              id="main-mobile-nav"
            >
              <Link
                to="/menu"
                onClick={toggleMobileMenu}
              >
                Menu
              </Link>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="resy"
                onClick={() => {
                  ReactGA.event({
                    category: 'resy',
                    action: 'click',
                    label: 'reserve-table',
                  }); 
                toggleMobileMenu()}}
                href="https://resy.com/cities/ric/scuffletown-garden-restaurant-bar"
              >
                Reservations
              </a>
              <button
                className="btn btn-link"
                onClick={() => {navigate(contactURL); toggleMobileMenu()}}
              >
                Contact
              </button>
              {/* <Link
                to="/events"
                onClick={toggleMobileMenu}
              >
                Events
              </Link>
              <Link
                to="/gift-cards"
                onClick={toggleMobileMenu}
              >
                Gift Cards
              </Link> */}
            </ul>
          </div>
          <div className="row text-center align-items-center">
            <div className="col mobile-icons">
              <ul
                className="d-lg-none list-inline justify-content-center"
                style={{ fontSize: '2em' }}
              >
                <li
                  className="list-inline-item"
                >
                  <a
                    href="https://www.facebook.com/scuffletowngarden/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-white"
                    aria-label="facebook"
                  >
                    <FacebookIcon additionalClasses="ml-auto mr-2" />
                  </a>
                </li>
                <li
                  className="list-inline-item"
                >
                  <a
                    href="https://www.instagram.com/scuffletowngarden/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-white"
                    aria-label="instagram"
                  >
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* desktop nav */}
      <nav
        className="fixed-top bg-offwhite shadow p-3 w-100"
        id="nav"
      >
        <div className="d-flex flex-row color-black d-lg-none w-100 align-items-center">
        <div className="w-100">                
            <Img fluid={data.logoGreen.childImageSharp.fluid}/>
          </div>
          <div className="d-flex justify-content-end w-50">
            <button
              style={{ background: 'none', border: 'none', fontSize: '1.5em' }}
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => toggleMobileMenu()}
              className="darkGreen"
            >
              <HamburgerIcon/>
            </button>
          </div>
        </div>
        <div className="d-none d-lg-flex flex-row justify-content-between w-100 px-3">
          <div className="d-flex flex-row w-100 align-items-center">
            <Link
              className="nav-link ml-3"
              to="/menu"
            >
              Menu
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link ml-3"
              aria-label="resy"
              onClick={() => {
                ReactGA.event({
                  category: 'resy',
                  action: 'click',
                  label: 'reserve-table',
                });
              }}
              href="https://resy.com/cities/ric/scuffletown-garden-restaurant-bar"
            >
              Reservations
            </a>
          </div>
          <div id="logo" className="w-100">
            <Link
              to="/"
            >
              <Img fluid={data.mainLogo.childImageSharp.fluid}/>
            </Link>
          </div>
          <div className="d-flex flex-row w-100 justify-content-end align-items-center">
            <button
              className="nav-link ml-3 btn btn-link"
              onClick={() => {navigate(contactURL)}}
            >
              Contact
            </button>
            {/* <Link
              className="nav-link mr-3"
              to="/events"
            >
              Events
            </Link>
            <Link
              className="nav-link mr-3"
              to="/gift-cards"
            >
              Gift Cards
            </Link> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
