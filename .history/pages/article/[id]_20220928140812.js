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
    const re
}
export default article
