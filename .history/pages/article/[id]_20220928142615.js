import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
const article = ({ article }) => {
    // const router = useRouter()
    // const { id } = router.query
    return (
      <div>
      
      </div>
    )
    }
export const gerServerSideProps=async(context)=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
const article=await res.json()
return{
    props
}
}

export default article