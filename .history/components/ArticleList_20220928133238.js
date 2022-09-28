import React from 'react'
import articleStyles from "../styles/Article.module.css"
const ArticleList = ({articles}) => {
  return (
    <div className={articleStyles.grid}>

    {articles.map(article=>(
      
      ))}
    </div>
  )
}

export default ArticleList
