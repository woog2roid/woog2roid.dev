import React from 'react'

import './index.scss'

export const PostInfo = ({ category, date }) => {
  return (
    <p className="post-info">
      <span>{category} | </span>
      <time>{date}</time>
    </p>
  )
}
