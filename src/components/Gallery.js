import React from 'react';
import { useStaticQuery } from 'gatsby';
import Img from "gatsby-image"

const Gallery = (props) => {
   const data = useStaticQuery(graphql`
    query {
      plate1: file(relativePath: { regex: "/plate-1/" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plate2: file(relativePath: { regex: "/plate-2/" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plate3: file(relativePath: { regex: "/plate-3/"  }) {
         childImageSharp {
            fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plate4: file(relativePath: { regex: "/plate-4/"  }) {
         childImageSharp {
           fluid(maxWidth: 800) {
             ...GatsbyImageSharpFluid
           }
         }
      }
      plate5: file(relativePath: { regex: "/plate-5/"  }) {
         childImageSharp {
           fluid(maxWidth: 800) {
             ...GatsbyImageSharpFluid
           }
         }
      }
    }
  `)

    const imgArr = [data.plate1, data.plate2, data.plate3, data.plate4, data.plate5];
    return (
       <div className="d-flex flex-wrap justify-content-center">
          {imgArr.map((img, i) => (
             <div style={{ width: 450, margin: '1em' }} key={`dish-${i}`}>
                <Img 
                  alt={`Scuffletown Dish ${i}`}
                  fluid={img.childImageSharp.fluid}
               />
             </div>
          ))}
       </div>
    )
};

export default Gallery;
