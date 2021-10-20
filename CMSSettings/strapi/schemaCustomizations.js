exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Implementing an interface allows access to use fragments
  //    (fragment Name on Interface {})

  // Strapi Page Component
  const IPage = `
    interface IPage implements IHasHeroImage{
      HeroImage: File
      HeroText: String
      SiteTitle: String
    }
  `

  // Full Page for the Site
  const ISitePage = `
    interface ISitePage {
      Page: Page,
      description: String
      subDescription: String
      multiPost: Boolean
      metaGroup: Meta
    }
  `

  const IBlogPost = `
    interface IBlogPost {
      id: String,
      Slug: String,
      published_at: String
      Title: String
      Description: String
      image: File
    }
  `

  // @TODO: I really need to make this consistent on the backend
  const IHasImageLower = `
    interface IHasImageLower {
      image: File
    }
  `

  const IHasImageUpper = `
    interface IHasImageUpper {
      Image: File
    }
  `

  const IHasHeroImage = `
    interface IHasHeroImage {
      HeroImage: File
    }
  `

  const IHasHeroImageLower = `
    interface IHasHeroImageLower {
      heroImage: File
    }
  `

  const IndexPage = `
    type StrapiIndexPage implements Node {
      metaGroup: Meta
      description: String
      subDescription: String
      multiPost: Boolean
    }

    type StrapiIndexPagePage implements Node & IHasHeroImage {
      HeroImage: File
    }

  `

  const FeaturedPost = `
    type StrapiFeaturedPost implements Node {
      blog_post: StrapiFeaturedPostBlog_post!
    } 


    type StrapiFeaturedPostBlog_post implements Node & IHasImageLower {
      image: File
    }
  `

  const BlogPosts = `
    type StrapiBlogPostBlogContent implements Node & IHasImageUpper {
      Image: File
      Text: String
      ImageCaption: String
      AffiliateLinkText: String
      ImageWidth: String
      Hide: Boolean
    }

    type StrapiBlogPost implements Node & IHasImageLower & IHasHeroImage {
      image: File
      comments: [StrapiComment]
      categories: [StrapiCategory]
      HeroImage: File
      metaGroup: Meta
      ppreviewOnly: Boolean
      Ads: Boolean
    }
  
  `

  const BlogListPage = `
    type StrapiBlogListPage implements Node & IHasHeroImageLower {
      heroImage: File
      metaGroup: Meta
    }
  `

  const AboutPage = `
    type StrapiAboutPagePagePage implements Node & IHasHeroImage {
      HeroImage: File
    }
  
  `
  const ContactPage = `
    type StrapiContactUsPagePagePage implements Node & IHasHeroImage {
      HeroImage: File
    }
    
    type StrapiContactUsPage implements Node & IHasImageLower {
      image: File
      metaGroup: Meta
    }
  `
  const FourOFour = `
    type StrapiFourOFourPagePage implements Node {
      metaGroup: Meta
    }
    type StrapiFourOFourPagePagePage implements Node & IHasHeroImage {
      HeroImage: File
    }
    
    type StrapiFourOFourPage implements Node & IHasImageLower {
      image: File
      metaGroup: Meta
    }
  `

  const typeDefs = `
    ${IPage}
    ${ISitePage}
    ${IBlogPost}
    ${IHasImageLower}
    ${IHasImageUpper}
    ${IHasHeroImage}
    ${IHasHeroImageLower}
  
    type Meta {
      title: String
      description: String
    }

    type Page implements Node & IPage & IHasHeroImage {
      SiteTitle: String
      HeroText: String
      HeroImage: File
    }

    type BlogPost {
      Title: String!
      Description: String!
      metaGroup: Meta
    }

    ${IndexPage}
    ${FeaturedPost}
    ${BlogPosts}
    ${BlogListPage}
    ${AboutPage}
    ${ContactPage}
    ${FourOFour}


    
    type Social {
      twitter: String
    }

    type SiteSiteMetadata implements Node {
      social: Social
    }

    type StrapiCommentReply implements Node {
      username: String!
      text: String!
    }

    type StrapiComment implements Node {
      username: String
      commentText: String
      reply: StrapiCommentReply
      created_at: Date @dateformat
      email: String
    }

    type StrapiCategory implements Node {
      text: String!
    }
    
    type StrapiAboutPagePage implements Node {
      metaGroup: Meta
    }

    type StrapiComingSoonPage implements Node {
      metaGroup: Meta
    }
    type StrapiComingSoonPagePage implements Node {
      HeroImage: File
    }
    type StrapiLogo implements Node {
      LogoImage: File
    }
    
  `
  createTypes(typeDefs)
}
