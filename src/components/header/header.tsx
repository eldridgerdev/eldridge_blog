import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import theme from '../../utils/theme';

type HeaderProps = {
    title?: string
}

const navHeaders = [
    {
        title: 'Home',
        link: '/'
    }, {
        title: 'About',
        link: '/about',
    }, {
        title: 'Blog',
        link: '/blog-post-list'
    }, {
        title: 'Gallery',
        link: '/coming-soon'
    }
]

const Nav = styled.header`
    // background-color: ${theme.colors.main};
    background-color: ${theme.colors.light};
    
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    border-bottom: ${theme.colors.main};
    border-bottom-width: thick;
    border-style: solid;

    // ${tw`transition duration-500 ease-in-out`}
    // min-height: 72px;
    // transition: all 1s ease-in-out;
    // height: 72px;
    // ${tw`p-6`};
`

const LogoArea = styled.div`
    // margin-right: auto;
    color: ${theme.colors.secondary};
    // margin-top: auto;
    // margin-bottom: auto;
    // ${tw`mr-6`};
    height: 72px;
    overflow: hidden;
`

// @TODO: Screen size adjustments. Font size smaller? Remove Logo Text?
const NavButtonContainer = styled(({ className, open, children }) => {
    const openClasses = [`flex`, `flex-col `];
    const closedClasses = [`hidden`];
    const bigClasses = [`flex`, `flex-row`, `w-full`, `flex-grow`];
    const smallClasses = (open ? openClasses : closedClasses);

    const addPrefix = (classes: string[], prefix = '') => {
        return classes.reduce((prev, classString) => {
            return `${prev} ${prefix}${classString}`;
        }, '');
    }

    const EmptyDiv = styled.div`
        ${tw`flex sm:flex md:hidden lg:hidden xl:hidden`}
    `

    return (
        <>
            {open && (<EmptyDiv />)}
                <div className={`
                    flex
                    ${className}
                    ${addPrefix(smallClasses)}
                    ${addPrefix(smallClasses, 'sm:')}
                    ${addPrefix(bigClasses, 'md:')}
                    ${addPrefix(bigClasses, 'lg:')}
                    ${addPrefix(bigClasses, 'xl:')}
                `}>{children}</div>
            {open && (<EmptyDiv />)}
        </>
    )
})`
    // flex-direction: row;
    align-items: flex-start;
`


// ${tw`w-full block flex-grow 
// hidden sm:hidden md:flex lg:flex xl:flex`}

const NavButton = styled.a`
    color: ${theme.colors.secondary};
    &:hover {
        color: ${theme.colors.selectedHeader};
    }
    margin-right:50px;
    align-self: center;
    ${tw`font-semibold block text-lg`}
`

const TitleSpan = styled.span`
    ${tw`font-semibold text-xl tracking-tight`};
`

// const Logo = styled.img`
//     height: 100%;
// `
const Logo = styled.div`
    display: flex;
    height: 100%;
    width: fit-content;
`

const BarsButton = styled.button`
    align-self: center;
    justify-self: center;
    border-color: ${theme.colors.main};
    &:hover {
        border-color: ${theme.colors.secondary}
    }
    & .fa-bars:hover {
        color: 'white';
    }
    ${tw`flex items-center px-3 py-2 border rounded`}
`

const BarsContainer = styled.div`
    justify-content: flex-end;
    ${tw`flex md:hidden lg:hidden xl:hidden mr-6`}
`

const Header: React.FC<HeaderProps> = ({ title = "Eldridge Expedition" }) => {
    const data = useStaticQuery(graphql`
        query GetLogo {
            strapiLogo {
                id
                strapiId
                LogoImage {
                    publicURL
                }
            }
        }
    `)

    const [navbarOpen, setNavbarOpen] = React.useState(false);
    
    return (
        <Nav>
            <LogoArea>
                <Logo>
                    <img src={data.strapiLogo.LogoImage.publicURL} />
                </Logo>
            </LogoArea>

            <div className="flex sm:flex md:hidden lg:hidden xl:hidden" />
            <BarsContainer> 
                <BarsButton onClick={() => setNavbarOpen(!navbarOpen)}>
                    <FontAwesomeIcon style={{
                        color: theme.colors.main
                    }} icon={faBars} />
                </BarsButton>
            </BarsContainer>

            <NavButtonContainer open={navbarOpen}>
                {navHeaders.map((header, key) => (
                    <NavButton href={header.link} key={key}>
                        {header.title}
                    </NavButton>    
                ))}
            </NavButtonContainer>
        </Nav>
    )
}

export default Header