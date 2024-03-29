export interface PortfolioProps {
  githubData?: Array<any>;
  dribbbleData?: Array<any>;
  projectsData?: Array<any>;
  loading?: boolean
}

export type DribbbleCardProps = {
  id: number
  title: string
  desc: string
  images: {
    hidpi: string
    normal: string
    teaser: string
    four_x: string
    two_x: string
    one_x: string
  },
  type: string
  html_url: string
  tags: Array<string>
}

export type GithubcardProps = {
  id: number
  type: string
  title: string
  desc: string
  link: string
  images: string
  forks: number
  watchers: number
  language: string
  stars: number
}

export interface Iproject {
  _id: string
  name: string
  description: string
  image: string
  link: string
  repo: string
  tags: [string]
}
