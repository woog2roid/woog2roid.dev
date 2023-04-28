import React from 'react'
import { Item } from './item'

import './index.scss'

export const Tag = ({ tags }) => {
  return (
    <div className="tag-container">
      {tags.map(tag => {
        return <Item tag={tag} />
      })}
    </div>
  )
}
