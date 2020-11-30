import React from 'react'
import data from '../../projets.json'

export const SingleProjectPage = ({ match }) => {
  const { projectTitle } = match.params
  const project = data.projects.find(project => project.title === projectTitle)
  
  if (!project) {
    return (
      <section>
        <h2>Project not found</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{project.title}</h2>
        <p className="post-content">{project.content}</p>
      </article>
    </section>
  )
}

export default SingleProjectPage
