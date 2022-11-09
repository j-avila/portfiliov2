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

export const formatPjtCard = (project) =>
  project?.map((card) => ({
    id: card._id,
    type: "project",
    name: card.name,
    description: card.description,
    link: card.link,
    repo: card.repo,
    tags: card.tags,
    image: card.image,
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

export const stringToHTML = (str) => {
  var dom = document.createElement("div")
  dom.innerHTML = str
  return dom
}
