import React from 'react';
import { FacebookIcon, InstagramIcon } from '../icons';

const Footer = (props) => {
    return (
      <footer className="portal-footer">          
        <div className="container-fluid">
          <div className="d-flex mx-auto justify-content-center mt-3">
            <div className="mr-3" style={{fontSize: '2em'}}>
              <a 
                className="link-black"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="facebook"
                href="https://www.facebook.com/scuffletowngarden/"
              >
                <FacebookIcon/>
              </a>
            </div>
            <div className="" style={{fontSize: '2em'}}>
              <a
                href="https://www.instagram.com/scuffletowngarden/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-black"
                aria-label="instagram"
              >
                <InstagramIcon/>
              </a>
            </div>
          </div>
          <div
            className="text-center my-3"
          >
            © {new Date().getFullYear()} Scuffletown Garden. All Rights Reserved
          </div>
        </div>
      </footer>
    )
  };

export default Footer;
