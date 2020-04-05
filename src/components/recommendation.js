import React from "react"

import styled from "@emotion/styled"
import { theme } from '../styles'

const Copy = styled.h5`
  color: ${theme.colors.dark};
  margin-bottom: 20px;
  font-family: ${theme.fonts.Roboto}
`;

const SliderContainer = styled.div`
display: grid;
grid-gap: 20px;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
 `
  
class Recommendation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <SliderContainer>
          <Copy>{this.props.message}</Copy>
          <InfoContainer>
            <Copy>{this.props.givenBy}</Copy>
            </InfoContainer>
            <InfoContainer>
            <Copy>{this.props.designation}</Copy>
          </InfoContainer>
        </SliderContainer>
      
    )
  }
}

export default Recommendation

