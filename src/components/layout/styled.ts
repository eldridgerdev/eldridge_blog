import styled from 'styled-components'
import tw from 'twin.macro'
import theme from '../../utils/theme'

export const MainContainer = styled.main`
  ${tw`flex flex-col items-center p-0 mx-5`}
`

export const ContentContainer = styled.div`
  ${tw`pb-7 flex-1 overflow-y-auto`}
`
export const LayoutContainer = styled.div`
  ${tw`flex flex-col h-screen`}
`

export const DescriptionContainer = styled.div`
  background-color: ${theme.colors.main};
  ${tw`flex text-center py-3`}
`
