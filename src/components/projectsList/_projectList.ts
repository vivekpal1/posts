interface projectsType {
  projectName: string
  description: string
  repoLink: string
  previewLink: string
}

type Projects<T> = T[]

export const projects: Projects<projectsType> = [
  {
    projectName: 'vivekpal.in',
    description: 'The personal website you are browsing at this moment.',
    repoLink: 'https://github.com/vivekpal1/vivek',
    previewLink: 'https://vivekpal.in',
  },
]
