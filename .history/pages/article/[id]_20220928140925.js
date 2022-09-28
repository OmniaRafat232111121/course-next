import React from 'react'
import { useRouter } from 'next/router'

const article = () => {
    const router=useRouter()
    const {id}=router.query
  return (
    <div>
      this is article {id}
    </div>
  )
}
export const getServerSideProps=async(context)=>{
    const re=await fetch(`https://jsonplaceholder.typicode.com/posts${context.params.id}`)
    const article=await
}
export default article
