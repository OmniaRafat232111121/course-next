import Head from 'next/head'
import React from 'react'
import Nav from '../components/Nav'

const Home = () => {
  return (
    <>
     <Head>
     <title>Web Dev News</title>
     <meta name="keywordes" content="web Development,programming"/>
     </Head>
      <h1>Welcome to Next</h1>
    </>
  )
}
export const  getStaticProps=async()=>{
const res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
const articles=await res.json();
return{
  pro
}
}
export default Home
