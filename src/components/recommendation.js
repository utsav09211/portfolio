import React from "react";

import styled from "@emotion/styled";
import { theme } from "../styles";

const Copy = styled.h5`
  color: ${theme.colors.light};
  margin-bottom: 20px;
  line-height: 28px;
  text-align: justify;
  padding-left: 20px;
  padding-right: 20px;
  font-family: ${theme.fonts.Roboto};
`;

const Info = styled.h5`
  color: ${theme.colors.yellow};
  margin-bottom: 10px;
  font-family: ${theme.fonts.Roboto};
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.darkBlueLighter};
  border-radius: 15px;
  max-width: 100%;
  padding: 20px 40px 50px 20px;
  border: 1px solid ${theme.colors.gray};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

class Recommendation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SliderContainer>
        <InfoContainer>
        <span style={{ color: "#FED766" }}>
          <i class="fa fa-quote-left fa-2x" aria-hidden="true" />
        </span>
        <Copy>{this.props.message}</Copy>
        <span style={{ color: "#FED766" }}>
          <i class="fa fa-quote-right fa-2x" aria-hidden="true" />
        </span>
        </InfoContainer>
        <InfoContainer>
          <Info>{this.props.givenBy}</Info>
        </InfoContainer>
        <InfoContainer>
          <Info>{this.props.designation}</Info>
        </InfoContainer>
      </SliderContainer>
    );
  }
}

export default Recommendation;
