export const formatGhCard = (repos) =>
  repos?.map((card) => ({
    id: card.id,
    type: "github",
    title: card.full_name,
    desc: card.description,
    link: card.html_url,
    forks: card.forks,
    watchers: card.watchers,
    language: card.language,
    stars: card.stargazers_count,
  }))

export const formatDBCard = (repos) =>
  repos?.map((card) => ({
    id: card.id,
    type: "dribbble",
    title: card.title,
    desc: card.description,
    images: card.images,
    tags: card.tags,
    html_url: card.html_url,
  }))
