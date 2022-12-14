import React from 'react'
import { useRouter } from 'next/router'

const article = ({ article }) => {
    // const router = useRouter()
    // const { id } = router.query
  
    return (
      <>
        <Meta title={article.title} description={article.excerpt} />
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link
      </>
    )
    }

export const getServerSideProps=async(context)=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article=await res.json()
    return{
        props:{
            article
        }
    }
}
export default article
