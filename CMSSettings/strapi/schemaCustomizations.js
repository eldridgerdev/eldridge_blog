exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    interface BlogPost {
      Title: String!
      Description: String!
      metaGroup: Meta
    }

    interface Meta {
      title: String
      description: String
    }

    interface Social {
      twitter: String
    }

    type SiteSiteMetadata implements Node {
      social: Social
    }

    type StrapiBlogPostBlogContent implements Node {
      Image: File
      Text: String
      ImageCaption: String
      AffiliateLinkText: String
      ImageWidth: String
      Hide: Boolean
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

    type StrapiFeaturedPost implements Node {
      blog_post: StrapiFeaturedPostBlog_post!
    }

    type StrapiBlogPost implements Node {
      image: File
      comments: [StrapiComment]
      categories: [StrapiCategory]
      HeroImage: File
      metaGroup: Meta
    }

    type StrapiIndexPage implements Node {
      metaGroup: Meta
      description: String
    }

    type StrapiIndexPagePage implements Node {
      HeroImage: File
    }

    type StrapiFeaturedPostBlog_post implements Node {
      image: File
    }
    
    type StrapiBlogListPage implements Node {
      heroImage: File
      metaGroup: Meta
    }
    type StrapiAboutPagePage implements Node {
      metaGroup: Meta
    }
    type StrapiAboutPagePagePage implements Node {
      HeroImage: File
    }

    type StrapiFourOFourPagePage implements Node {
      metaGroup: Meta
    }
    type StrapiFourOFourPagePagePage implements Node {
      HeroImage: File
    }
    
    type StrapiFourOFourPage implements Node {
      image: File
      metaGroup: Meta
    }
    type StrapiContactUsPagePagePage implements Node {
      HeroImage: File
    }
    
    type StrapiContactUsPage implements Node {
      image: File
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