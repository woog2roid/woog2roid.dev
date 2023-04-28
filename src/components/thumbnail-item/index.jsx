import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <div key={node.fields.slug}>
      <h3>{node.frontmatter.title || node.fields.slug}</h3>
      <p style={{ fontWeight: 'bold' }}>
        <time className="thumbnail-date">
          <span>{node.frontmatter.category} | </span>
          {node.frontmatter.date}
        </time>
      </p>
      <p
        className="summary"
        dangerouslySetInnerHTML={{ __html: node.excerpt }}
      />
    </div>
  </Link>
)
