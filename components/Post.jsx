import React from 'react'
import Link from "next/link"

const Post = ({posts}) => {


    return (
        <div className="flex-wrap">
            <div className="flex justify-center flex-wrap mt-10">
                {posts?.map((post) => (
                    <div className="w-64 flex align-center flex-col ml-10 border-2">
                        <img className="w-full h-64 rounded-md object-cover" src={`${post.image}`}/>
                        <Link href={`/blog/${post.id}`}><button className="bg-red-600 rounded-full text-white cursor-pointer p-2 -mt-14 mb-12 hover:bg-neutral-500">See More</button></Link>
                        <p className="text-2xl m-2">{post.title}</p>
                        <p className="text-sm m-2">{post.blog_type}</p>
                        <p className="text-md mt-2 m-2">{post.likes}</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Post