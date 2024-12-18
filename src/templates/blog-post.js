import React, { useEffect } from 'react'
import { graphql } from 'gatsby'

import * as Elements from '../components/elements'
import { Layout } from '../layout'
import { Head } from '../components/head'
import { PostTitle } from '../components/post-title'
import { PostInfo } from '../components/post-info'
import { PostContainer } from '../components/post-container'
import { PostToc } from '../components/post-toc'
import { SocialShare } from '../components/social-share'
import { SponsorButton } from '../components/sponsor-button'
import { Bio } from '../components/bio'
import { PostNavigator } from '../components/post-navigator'
import { Disqus } from '../components/disqus'
import { Utterances } from '../components/utterances'
import * as ScrollManager from '../utils/scroll'

import '../styles/code.scss'
import 'katex/dist/katex.min.css'
import '../styles/markdown.scss'

export default ({ data, pageContext, location }) => {
  useEffect(() => {
    ScrollManager.init()
    return () => ScrollManager.destroy()
  }, [])

  const post = data.markdownRemark
  const metaData = data.site.siteMetadata
  const { title, comment, siteUrl, author, sponsor } = metaData
  const { disqusShortName, utterances } = comment
  const { title: postTitle, date, category } = post.frontmatter

  return (
    <Layout location={location} title={title}>
      <Head title={postTitle} description={post.excerpt} />
      <PostTitle title={postTitle} />
      <PostInfo category={category} date={date} />
      <PostContainer html={post.html} />
      <PostToc toc={post.tableOfContents} />
      <SocialShare title={postTitle} author={author} />
      {!!sponsor.buyMeACoffeeId && (
        <SponsorButton sponsorId={sponsor.buyMeACoffeeId} />
      )}
      <Elements.Hr />
      <Bio />
      <PostNavigator pageContext={pageContext} />
      {!!disqusShortName && (
        <Disqus
          post={post}
          shortName={disqusShortName}
          siteUrl={siteUrl}
          slug={pageContext.slug}
        />
      )}
      {!!utterances && <Utterances repo={utterances} />}
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        comment {
          disqusShortName
          utterances
        }
        sponsor {
          buyMeACoffeeId
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 100)
      html
      tableOfContents(
        absolute: false
        pathToSlugField: "frontmatter.title"
        maxDepth: 6
        heading: null
      )
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
      }
    }
  }
`
