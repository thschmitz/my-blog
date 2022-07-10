import React from 'react'
import TimeAgo from "react-timeago"
import Link from "next/link"

const ContrastPost = ({recentPost}) => {

  console.log(recentPost)

  return (

    <div className={`shadow bg-white flex py-40`}>
      <div className="opacity-100 container text-black ml-20">
        <p className="ml-10 text-2xl">{recentPost?.title}</p>
        <p className="ml-12 text-sm">{recentPost?.blog_type}</p>
        <p className="text-md ml-10 mt-10"><TimeAgo date={recentPost?.created_at}/></p>
        <Link href={`/blog/${recentPost?.id}`}><button className="bg-red-600 rounded-full text-white cursor-pointer p-2 ml-10 mt-10">See More</button></Link>
      </div>
      <div className="flex items-center justify-center mr-20">
        <img src={recentPost?.image} className="w-full h-full object-cover" alt=""/>
      </div>
          
    </div>
  )
}

export default ContrastPost