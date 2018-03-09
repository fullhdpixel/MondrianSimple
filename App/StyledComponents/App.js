import {Dimensions} from 'react-native'

import styled from 'styled-components'

const {width} = Dimensions.get('window')
const borderWidth = 12;

export const Container = styled.View `
  justifyContent: center;
  height: 100%;
`

export const Mondrian = styled.View `
  width: ${width - 20}px;
  height: ${width - 20}px;
  display: flex;
  margin: 12px;
  borderWidth: ${borderWidth}px;
`

export const Top = styled.View `
  flex: 2.9;
  display: flex;
  flexDirection: row;

  borderBottomWidth: ${borderWidth}px;
`

export const TopLeft = styled.View `
  flex: 1;

  borderRightWidth: ${borderWidth}px;
`

export const TopRight = styled.View `
  flex: 2.9;
  backgroundColor: red;
`

export const TopLeftTop = styled.View `
  flex: 1;
  borderBottomWidth: ${borderWidth}px;
`

export const TopLeftBottom = styled.View `
  flex: 3;
  borderTopWidth: ${borderWidth}px;
`

export const Bottom = styled.View `
  flex: 1;

  display: flex;
  flexDirection: row;
`

export const BottomLeft = styled.View `
  flex: 1;
  backgroundColor: blue;

  borderRightWidth: ${borderWidth}px;
`

export const BottomRight = styled.View `
  flex: 3;
  
  display: flex;
  flexDirection: row;
`

export const BottomRightLeft = styled.View `
  flex: 3;

  borderRightWidth: ${borderWidth}px;
`

export const BottomRightRight = styled.View `
  flex: 1;

  display: flex;
`

export const BottomRightTop = styled.View `
  flex: 1;
`

export const BottomRightBottom = styled.View `
  flex: 1;
  backgroundColor: yellow;

  borderTopWidth: ${borderWidth}px;
`