import React from "react"
import styled from "@emotion/styled"
import { Element } from 'react-scroll'
import ScrollReveal from 'scrollreveal'
import {  Section, theme } from '../styles'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Recommendation from './recommendation'

const Title = styled.h2`
  color: ${theme.colors.dark};
  margin-bottom: 20px;
`;

const SliderContainer = styled.div`
  width: 100%
 
`
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: theme.colors.navy }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: theme.colors.navy }}
      onClick={onClick}
    />
  );
}

class Recommendations extends React.Component {

  componentDidMount = () => {
    ScrollReveal().reveal(this.refs.connect, theme.scrollRevealConfig)
    ScrollReveal().reveal(this.refs.image, theme.scrollRevealConfig)
  }

  encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <Section bgColor={theme.colors.light} id="recommendations">
        <Element name="recommendations" />
        
            <div ref="recommendations">
              <SliderContainer>
                <Title>What people have to say</Title>
                <br/>
              <Slider {...settings}>
                {
                  this.props.data.map((recommendationNode, i) => {
                    const recommendation =  recommendationNode.node;
                    return <Recommendation
                      key={`${recommendation.givenBy}`}
                      message={`${recommendation.message}`}
                      givenBy={`${recommendation.givenBy}`}
                      designation={`${recommendation.designation}`}
                       />
                  })
                } 
                </Slider>
              </SliderContainer>

            </div>
      </Section>
    )
  }
}

export default Recommendations

