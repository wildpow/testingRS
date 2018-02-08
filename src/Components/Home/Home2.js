import React from 'react';
import GraphImg from 'graphcms-image';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { Main, SaleWrapper, SaleImg, TempurImg, SealyImg, StearnsImg } from './HomeStyles2';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components'

const NewButt = styled(ButtonBack)`
/* /* position: absolute; */
    position: 'absolute';
    width: '100%';
    z-index: '100';
    bottom: '0';
    text-align: 'center';
    left: 0;
    float: left;
    top: 500px;
`
const NewButt2 = styled(ButtonNext)`
 position: 'absolute';
 width: '100%';
 z-index: '100';
 bottom: '0';
 text-align: 'center';
 right: 0;
 float: right;
 

 
`
const HomeComponent = ({ data: { loading, error, Carousel }}) => {
  if(error) return console.log(error)
  if(!loading) {
    return (
      <Main>
        
        <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={125}
        totalSlides={4}>
       <NewButt>Back</NewButt>
        <Slider>
        
          <Slide index={0}>
            {/* <SaleWrapper> */}
              <GraphImg image={Carousel.sale} maxWidth={500} withWebp={true} fit="clip"/>
            {/* </SaleWrapper> */}
          </Slide>
          <Slide index={1}>
            <Link to='/brands/stearns'>
              <GraphImg image={Carousel.pic1} maxWidth={500} withWebp={true} fit="clip"/>
            </Link>
          </Slide>
          <Slide index={2}>
            <Link to='/brands/tempurpedic'>
              <GraphImg image={Carousel.pic2} maxWidth={500} withWebp={true} fit="clip"/>
            </Link>
          </Slide>
          <Slide index={3}>
            <Link to='/brands/sealy'>
              <GraphImg image={Carousel.pic3} maxWidth={500} withWebp={true} fit="clip"/>
            </Link>
            </Slide>
            
          </Slider>
          <NewButt2>Next</NewButt2>
        {/* <DotGroup/> */}
        </CarouselProvider>
      </Main>
    )
  }
  return <div>{console.log(loading)}</div>
}

export const query = gql`
  query allAssets {
    Carousel(id:"cjdc1no0pobkl0159tuo2lj52"){
      sale{
        uri
        width
        height
        handle
      }
      pic1 {
        uri
        width
        height
        handle
      }
      pic2 {
        uri
        width
        height
        handle
      }
      pic3 {
        uri
        width
        height
        handle
      }
    }
  }
`;
export default graphql(query)(HomeComponent);