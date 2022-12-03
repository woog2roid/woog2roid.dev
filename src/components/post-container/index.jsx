import React from 'react'
import * as Storage from '../../utils/storage'

export const PostContainer = ({ html }) => (
  <div
    className={'markdown-body ' + Storage.getTheme() ? 'dark' : 'light'}
    dangerouslySetInnerHTML={{ __html: html }}
  />
)
