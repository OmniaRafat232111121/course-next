import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
const article = ({ article }) => {
    
  
    return (
      <div>
        <Meta title={article.title} description={article.excerpt} />
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href='/'>Go Back</Link>
      </div>
    )
  }
export const gerServerSideProps=async(context)=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
const article=await res.json()
return{
    props:{
        article,
    }
}
}


export default article
