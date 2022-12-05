import React from 'react'

import './index.scss'

export const PostToc = ({ toc }) => {
  return <div className="toc" dangerouslySetInnerHTML={{ __html: toc }} />
}
