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
const res=await fetch
}
export default Home
