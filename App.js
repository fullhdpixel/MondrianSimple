import React from 'react'
import {StatusBar, Text, View} from 'react-native'

import {Container, Mondrian, Top, Bottom, TopLeft, TopRight, TopLeftTop, TopLeftBottom, BottomLeft, BottomRight, BottomRightLeft, BottomRightRight, BottomRightTop, BottomRightBottom} from "./App/StyledComponents/App"

export default class App extends React.Component {
  render() {
    return (
      // Hold the painting vertically centered
      <Container>
        {/* Painting */}
        <Mondrian>
          <StatusBar hidden/>
          {/* Major division in Top/Bottom */}
          <Top>
            <TopLeft>
              <TopLeftTop/>
              <TopLeftBottom/>
            </TopLeft>
            <TopRight></TopRight>
          </Top>
          <Bottom>
            <BottomLeft/>
            <BottomRight>
              <BottomRightLeft/>
              <BottomRightRight>
                <BottomRightTop/>
                <BottomRightBottom/>
              </BottomRightRight>
            </BottomRight>
          </Bottom>
        </Mondrian>
      </Container>
    )
  }
}