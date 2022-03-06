import { FlexStyle } from 'react-native'
import styled from 'styled-components/native'

interface ContainerProps {
  readonly alignItems?: FlexStyle['alignItems']
  readonly justifyContent?: FlexStyle['justifyContent']
  readonly flex?: FlexStyle['flex']
  readonly direction?: FlexStyle['flexDirection']
  readonly padding?: FlexStyle['padding']
  readonly margin?: FlexStyle['margin']
  readonly backgroundColor?: string
}

export const Container = styled.View<ContainerProps>`
  ${props => props.flex && { flex: props.flex }};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  flex-direction: ${props => props.direction || 'row'};
  padding: ${props => props.padding || 0};
  margin: ${props => props.margin || 0};
  background-color: ${props => props.backgroundColor || 'white'};
`
