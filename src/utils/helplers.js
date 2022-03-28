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
