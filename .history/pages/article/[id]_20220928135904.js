import React from 'react'
import { useRouter } from 'next/router'

const article = () => {
    const router=useRouter()
    const {id}=router.query
  return (
    <div>
      thi
    </div>
  )
}

export default article
