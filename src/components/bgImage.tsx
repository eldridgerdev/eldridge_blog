import React from 'react'
import styled, { StyledFunction } from 'styled-components'
import Image from 'gatsby-image'
import BgImage from 'gatsby-background-image';

interface BgImageProps {
    fluid?: {
        [key: string]: any
    },
    title: string,
    height?: string | null,
    mobileHeight?: string | null,
    overlayColor?: string | null,
    children?: React.ReactNode | null,
    className?: string | null
}

interface ParentStyledProps {
    bc: string
}

const Parent = styled.div`
    position: relative;
    
    opacity: 1 !important;
      background-size: cover;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(196, 196, 196, 0) 99.89%
      );
      background-size: cover;
`

interface FakeBgImageStyledProps {
    height?: string | null,
    mobileHeight?: string | null
}

const FakeBgImage = styled(Image)<FakeBgImageStyledProps>`
    max-height: 100%;
    // @media screen and (min-width: 500px) {
    //   // width: 500px;
    //   margin: auto;
    // }
    // position: absolute;
    // margin: auto;
    // height: 100%;
    // width: 100%;
    // background-position: top left;
    // background-repeat: repeat-y;
    // background-size: cover;
    // background-attachment: fixed;
    // background-position: center;
    // background-repeat: no-repeat;

    ${(props: FakeBgImageStyledProps) => {
      let propStyles = '';
      if (props.height) {
        propStyles = `
          ${propStyles}
          height: ${props.height};
        `
      }

      if (props.mobileHeight) {
        propStyles = `
          ${propStyles}
          @media screen and (max-width: 600px) {
            height: ${props.mobileHeight};
          }
        `
      }

      return propStyles
    }}
    // z-index: -1;

    & > img {
      //   object-fit: cover !important;
      //   object-position: 0% 0% !important;
      //   font-family: "object-fit: cover !important; object-position: 0% 0% !important;";
      // }
    }
`

const Content = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

const BackgroundImage = ({
  fluid,
  title,
  height = null,
  mobileHeight = null,
  children = null,
  className = ''
}: BgImageProps) => (
  // <Parent>
    <>
      <FakeBgImage
        Tag='section'
        fluid={fluid}
        // title={title}
        height={height}
        mobileHeight={mobileHeight}
        imgStyle={{
          left: 0,
          right: 0,
          margin: '0 auto',
          width: 'auto'
        }}
      />
      {children && 
        <Content className={className}>{children}</Content>}
    </>
  // </Parent>
);

export default BackgroundImage;