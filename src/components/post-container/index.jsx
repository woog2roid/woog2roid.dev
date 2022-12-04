import React from 'react'

export const PostContainer = ({ html }) => (
  <div className={'markdown-body'} dangerouslySetInnerHTML={{ __html: html }} />
)
