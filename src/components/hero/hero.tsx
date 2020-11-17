import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import theme from '../../utils/theme'
import BgImage from '../bgImage'
import HeroGradient from './hero-gradient'

const height = 50

const HeroContainer = styled.div`
    height: ${height}vh;
    position: relative;
    border-bottom: ${theme.colors.main};
    border-bottom-width: thick;
    overflow: hidden;
    border-style: solid;
`

interface HeroImageStyledProps {
    url: string
}

const HeroImage = styled.div<HeroImageStyledProps>`
    background-image: url(${({ url }) => url});
    background-position-x: center;
    background-position-y: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: ${height}vh;
    position: relative;
`

const HeroText = styled.div`
    text-align: center;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${theme.colors.light};
`

type HeroTextProps = {
    text: string,
    img: any,
    title: string
}

const HeroTextComponent = ({ text, img, title }: HeroTextProps ) => {
    const TextComponent = () => (
        <HeroText className='text-2xl font-bold'>
            <h1>{text}</h1>
        </HeroText>
    )

    if (img) {
        return (
            // <HeroImage url={img.src}>
            //     <TextComponent />
            // </HeroImage>
            <BgImage
                title={title}
                fluid={img}
                height={`${height}vh`}
                // mobileHeight='25vh'
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
    text?: string
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
                text={text || data.strapiHeroText.text}
                img={heroImage}
                title={data.strapiHeroText.strapiId}
                />
        </HeroContainer>
    )
}

export default Hero