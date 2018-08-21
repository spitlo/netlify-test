import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
  position: relative;
  width: 600px;
  height: 0;
  padding-bottom: ${props => (props.height / props.width) * 100 + '%'};
`

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.5s;
  transitionDelay: ${props => props.transitionDelay ? props.transitionDelay : 600};
  opacity: ${props => props.opacity ? props.opacity : 1};
  width: 100%;
  height: 100%;
  objectFit: cover;
  objectPosition: center;
`

const noOp = () => {}

const Img = props => {
  const { opacity, onLoad, transitionDelay, image, ...otherProps } = props
  console.log('image:', image);
  const { file: { details } } = image
  console.log(details);
  return (
    <ImageContainer width={details.image.width} height={details.image.height}>
      <StyledImg
        {...otherProps}
        onLoad={onLoad || noOp}
      />
    </ImageContainer>
  )
}

export default Img
