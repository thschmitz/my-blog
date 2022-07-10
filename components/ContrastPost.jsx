import React from 'react'
import TimeAgo from "react-timeago"

const ContrastPost = ({recentPost}) => {

  console.log(recentPost)

  return (

    <div className={`shadow bg-white py-40 bg-no-repeat bg-center bg-contain flex`}>
      <div className="opacity-100 container z-50 text-black">
        <p className="ml-10 text-2xl">{recentPost?.title}</p>
        <p className="ml-12 text-sm">{recentPost?.blog_type}</p>
        <p className="text-md ml-10 mt-10"><TimeAgo date={recentPost?.created_at}/></p>
        <button className="bg-red-600 rounded-full text-white cursor-pointer p-2 ml-10 mt-10">See More</button>
      </div>
      <div className="flex items-center justify-center">
        <img src={recentPost?.image} className="w-full h-full" alt=""/>
      </div>
          
    </div>
  )
}

export default ContrastPost