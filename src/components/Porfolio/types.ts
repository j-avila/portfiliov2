export interface PortfolioProps {
  githubData?: any;
}

export type FigmaCardProps = {
  id: number
  title: string
  image: string
  desc: string
  link: string,
  type: string
  data: Array<any>
}

export type GithubcardProps = {
  id: number
  type: string
  title: string
  desc: string
  link: string
  forks: number
  watchers: number
  language: string
  stars: number
}
