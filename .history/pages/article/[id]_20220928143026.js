import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

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
