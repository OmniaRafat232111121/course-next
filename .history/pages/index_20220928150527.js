import Head from 'next/head'
import React from 'react'
import Nav from '../components/Nav'
import ArticleList from '../components/ArticleList'
import Meta from '../components/Meta'

const Home = ({articles}) => {
  return (
    <div>
     <M
      <h1>Welcome to Next</h1>
      <ArticleList articles={articles} />
      
    </div>
  )
}
export const  getStaticProps=async()=>{
const res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
const articles=await res.json();
return{
  props:{
    articles
  }
}
}
export default Home
