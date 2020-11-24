import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'
import theme from '../utils/theme'

const Nav = styled.nav`
    background-color: ${theme.colors.main};
    height: 10px;
`

const NavButtonContainer = styled.li`
    ${tw`flex-1 mr-2`}
`

const NavLink = styled(Link)`
    color: ${theme.colors.light};
    &:hover {
        color: ${theme.colors.secondary}
    }
    ${tw`text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500`}
`

type BlogNavProps = {}

type DataType = {
    allStrapiCategory: {
        edges: [{
            node: {
                strapiId: string,
                text: string
            }
        }]
    }
}

const BlogNav: React.FC<BlogNavProps> = () => {
    // const data: DataType = useStaticQuery(graphql`
    //     query AllCategories {
    //         allStrapiCategory {
    //             edges {
    //                 node {
    //                     strapiId
    //                     text
    //                 }
    //             }
    //         }
    //     }
    // `)

    return (
        <Nav>
            {/*
            
            No Need for Categories yet,
                implement later
            
            <ul className='flex'>
                <NavButtonContainer key='recent'>
                    <NavLink to={`/category/recent`}>
                        Most Recent
                    </NavLink>
                </NavButtonContainer>
                
                {data.allStrapiCategory.edges.map((category) => (
                    <NavButtonContainer key={category.node.strapiId}>
                        <NavLink to={`/category/${category.node.strapiId}`}>
                            {category.node.text}
                        </NavLink>
                    </NavButtonContainer>
                ))}
            </ul> */}
        </Nav>
    )
}

export default BlogNav