import Link from 'next/link'
import React from 'react'
import articleStyles from "../styles/Article.module.css"
const ArticleItem = ({article}) => {
  return (
    <div>
      <Link href="/article/[id]" as={`/article/{article.id}`}>
      <a className={articleStyles}></a>
      </Link>
    </div>
  )
}

export default ArticleItem
