import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import theme from '../../utils/theme'
import BgImage from '../bgImage'
import HeroGradient from './hero-gradient'
import tw from 'twin.macro'

const height = 65
const mobileHeight = 30

const HeroContainer = styled.div`
    ${tw`mt-2`}
// background-color: #6d695c;
// background:
// linear-gradient(135deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),
// linear-gradient(225deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px;
// background-color:#708090;
// background-size: 64px 128px;

    // background-color: ${theme.colors.main};
    // background-color: rgba(7,91,27,1);
    // max-height: ${height}vh;
    // height: ${height}vh;
    
    height: 75%;
    max-height: 75%;
    @media screen and (max-width: 600px) {
        height: ${mobileHeight}vh;
    }
    position: relative;
    // border-bottom: ${theme.colors.main};
    // border-bottom-width: thick;
    overflow: hidden;
    // border-style: solid;
    // ${tw`h-48 sm:h-48 md:h-64`}

    // display: flex;
    // justify-content: center;
    // align-items: center
`

interface HeroImageStyledProps {
    url: string
}

const HeroText = styled.div`
    text-align: center;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    color: ${theme.colors.light};
    ${tw`font-bold leading-tight
        text-xl sm:text-xl md:text-2xl
    `}
`

type HeroTextProps = {
    text: string,
    img: any,
    title?: string
}

const HeroTextComponent = ({ text, img, title }: HeroTextProps ) => {
    const TextComponent = () => {
        if (!text) return null;
        return (
            <HeroText className='text-2xl font-bold'>
                <h1>{text}</h1>
            </HeroText>
        )
    }

    if (img) {
        return (
            // <HeroImage url={img.src}>
            //     <TextComponent />
            // </HeroImage>
            <BgImage
                title={title || 'Hero Image'}
                fluid={img}
                height={`${height}vh`}
                mobileHeight={`${mobileHeight}vh`}
            >
                <TextComponent />
            </BgImage>
        )
    } else {
        return (
            // <HeroContainer>
                <TextComponent />
            // </HeroContainer>
        )
    }
}

type HeroProps = {
    image?: any,
    text?: string | null
}

const Hero: React.FC<HeroProps> = ({ image, text }) => {
    // const data = useStaticQuery(graphql`
    //     query GetHero {
    //         strapiHeroText {
    //             strapiId
    //             text
    //             image {
    //                 childImageSharp {
    //                   fluid {
    //                     ...GatsbyImageSharpFluid
    //                   }
    //                 }
    //             }
    //         }
    //     }
    // `)

    // const heroImage= image || data.strapiHeroText.image?.childImageSharp?.fluid

    return (
        <HeroContainer>
            {/* <HeroGradient /> */}
            <HeroTextComponent
                text={text || ''}
                img={image}
                // title={data.strapiHeroText.strapiId}
                />
        </HeroContainer>
    )
}

export default Hero