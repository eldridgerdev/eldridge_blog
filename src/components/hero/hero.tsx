import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import theme from '../../utils/theme'
import BgImage from '../bgImage'
import HeroGradient from './hero-gradient'
import tw from 'twin.macro'

const height = 45
const mobileHeight = 30

const HeroContainer = styled.div`
    height: ${height}vh;
    @media screen and (max-width: 600px) {
        height: ${mobileHeight}vh;
    }
    position: relative;
    border-bottom: ${theme.colors.main};
    border-bottom-width: thick;
    overflow: hidden;
    border-style: solid;
    // ${tw`h-48 sm:h-48 md:h-64`}
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
    title: string
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
                title={title}
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
    const data = useStaticQuery(graphql`
        query GetHero {
            strapiHeroText {
                strapiId
                text
                image {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
            }
        }
    `)

    const heroImage= image || data.strapiHeroText.image?.childImageSharp?.fluid

    return (
        <HeroContainer>
            {/* <HeroGradient /> */}
            <HeroTextComponent
                text={text || text === null ? '' : data.strapiHeroText.text}
                img={heroImage}
                title={data.strapiHeroText.strapiId}
                />
        </HeroContainer>
    )
}

export default Hero