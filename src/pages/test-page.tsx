import { graphql } from 'gatsby'
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

// export const pageQuery = graphql`
// query TestPageQuery {
//   strapiAaTest {
//       text
//   }
// }
// `
const TestPage: React.FC<{ data: { strapiAaTest: { text: any } } }> = ({
  data,
}) => {
  const TestP = (props: any) => <p {...props} style={{ color: 'blue' }} />

  const text = (data && data.strapiAaTest && data.strapiAaTest) || 'No Text'

  // console.log(data.strapiAaTest.text)
  return (
    <MDXProvider
      components={{
        p: TestP,
      }}>
      <div>
        This is a test page
        <br />
        {/* {data.strapiAaTest.text} */}
        {/* <MDXRenderer>{text}</MDXRenderer> */}
        <br />
        sdafasd
      </div>
    </MDXProvider>
  )
}

export default TestPage
