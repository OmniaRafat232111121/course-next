import React from 'react'
import { useRouter } from 'next/router'

const article = ({a}) => {
    // const router=useRouter()
    // const {id}=router.query
  return (
    <div>
      
    </div>
  )
}
export const getServerSideProps=async(context)=>{
    const re=await fetch(`https://jsonplaceholder.typicode.com/posts${context.params.id}`)
    const article=await resizeBy.json()
    return{
        props:{
            article
        }
    }
}
export default article
