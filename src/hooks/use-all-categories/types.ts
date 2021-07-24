export interface Category {
  text: string
}

export interface Edge {
  node: Category
}

export interface QueryProps {
  allStrapiCategory: {
    edges: [Edge]
  }
}
