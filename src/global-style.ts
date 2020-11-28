import { createGlobalStyle } from "styled-components"
import tw from "twin.macro"

import theme from './utils/theme'

export default createGlobalStyle`
  body {
    background-color: ${theme.colors.background};
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 38px;
    width: 100%;
  }
  // body {
  //   ${tw`m-0 p-0 font-sans bg-yellow-400 text-gray-900`};
  //   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  //   -webkit-text-size-adjust: 100%;
  //   width: 100vw;
  //   max-width: 100vw;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  //   text-rendering: optimizeLegibility;
  //   -webkit-font-feature-settings: "pnum";
  //   font-feature-settings: "pnum";
  //   font-variant-numeric: proportional-nums;
  // }
  // h1, h2, h3, h4, h5, h6 {
  //   ${tw`font-bold`}
  // }
`
