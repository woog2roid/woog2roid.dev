import React from 'react'
import { Link } from 'gatsby'
import { Tag } from '../tag'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <div className={`thumbnail ${TARGET_CLASS}`}>
    <div key={node.fields.slug}>
      <Link to={node.fields.slug}>
        <h3>{node.frontmatter.title || node.fields.slug}</h3>
      </Link>
      <p style={{ fontWeight: '500' }}>
        <span>{node.frontmatter.category} | </span>
        <time>{node.frontmatter.date}</time>
      </p>
      <p
        className="summary"
        dangerouslySetInnerHTML={{ __html: node.excerpt }}
      />
      <Tag tags={node.frontmatter.tags} />
    </div>
  </div>
)
