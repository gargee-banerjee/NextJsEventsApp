import React from 'react'
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter();
    console.log(router.query)
  return (
    <div>Event Slug</div>
  )
}

export default index