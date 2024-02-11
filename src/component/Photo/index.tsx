import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Slider from 'react-slick';
import './styles.scss';
import { StaticImage } from 'gatsby-plugin-image';

const Photos = () => {
  return (
    <div className='photo'>
      <div className='title'>Photo</div>
      <StaticImage
        src='../../images/photoList/p3.jpeg'
        alt={'s1'}
        width={500}
        height={300}
      />
      <StaticImage
        src='../../images/photoList/p4.jpeg'
        alt={'s2'}
        width={500}
        height={300}
      />
      <StaticImage
        src='../../images/photoList/p5.jpeg'
        alt={'s3'}
        width={500}
        height={300}
      />
      <StaticImage
        src='../../images/photoList/p6.jpeg'
        alt={'s4'}
        width={500}
        height={300}
      />
    </div>
  );
};

export default Photos;


  // const data = useStaticQuery(graphql`
  //   query {
  //     allFile(filter: { name: { regex: "/p[0-9]/" } }) {
  //       nodes {
  //         publicURL
  //         name
  //         extension
  //       }
  //     }
  //   }
  // `);

  // const imageList = data.allFile.nodes.map((node: any) => ({
  //   src: node.publicURL,
  //   alt: node.name,
  // }));

  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  // };
// <div className='slider-container'>
//   <Slider {...settings}>
//     {imageList.map((value: any, index: number) => (
//       <div key={index}>
//         <img src={value.src} alt={value.alt} width={500} height={300} />
//       </div>
//     ))}
//   </Slider>
// </div>
