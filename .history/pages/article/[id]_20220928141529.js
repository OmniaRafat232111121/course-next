import React from 'react'
import { useRouter } from 'next/router'
import {Lin}
const article = ({article}) => {
    // const router=useRouter()
    // const {id}=router.query
  return (
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    <br />
    <Link href='/'>Go Back</Link>
  )
}
export const getServerSideProps=async(context)=>{
    const re=await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article=await resizeBy.json()
    return{
        props:{
            article
        }
    }
}
export default article
